/**
* @license TOTVS | Exemplo THF v1.0.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsCustomer
* @name TotvsCustomerListController
* @object controller
*
* @created 2017-9-12 v1.0.0
* @updated 2017-9-12 v1.0.0
*
* @requires
*
* @dependencies
*
* @description Controller responsável por listar os registros
*/

(function () {

    'use strict';

    angular
        .module('veiculoMod')
        .controller('veiculoListController', veiculoListController);

    veiculoListController.$inject = [
        '$scope',
        '$modal',
        'totvs.app-notification.Service',
        'dateFilter',
        'i18nFilter',
		'veiculoFactory'
    ];

    function veiculoListController($scope, $modal, notification, dateFilter, i18nFilter, veiculoFactory) {

        // *********************************************************************************
        // *** Variables
        // *********************************************************************************

        var self = this,
            advancedSearch = {};

        // *********************************************************************************
        // *** Public Properties and Methods
        // *********************************************************************************

        self.records = [];
        self.recordsCount = 0;
        self.disclaimers = [];
        self.searchText = '';
        self.search = search;
        self.loadRecords = loadRecords;
        self.openAdvancedSearch = openAdvancedSearch;
        self.removeDisclaimer = removeDisclaimer;
        self.applyEdit = applyEdit;
        self.onRemove = onRemove;

        init();

        // *********************************************************************************
        // *** Controller Initialize
        // *********************************************************************************

        function init() {

            loadRecords(false);

        }

        // *********************************************************************************
        // *** Functions
        // *********************************************************************************

        function loadRecords(isMore, filter) {

            var parameters = {},
                start = 0;

            // paginação
            self.recordsCount = 0;

            if (isMore) {
                start = self.records.length;
            } else {
                self.records = [];
            }

            // pesquisa
            if (filter) {                
                parameters.filter = [];
                //Filtra os projetos em Execução, que não estão como revisão e que o usuario possui permissão de acesso
                parameters.filter[0] = "TRTVEICULO.DESCRICAO like :POSICAO";
                parameters.filter[1] = '%' + self.searchText + '%';               
                parameters.filter = JSON.stringify(parameters.filter);
            }

            parameters.start = start;
            parameters.limit = 10;

            veiculoFactory.findRecords(parameters, function (result) {
                if (result) {
                    angular.forEach(result, function (value) {

                        if (value && value.$length) {
                            self.recordsCount = value.$length;
                        }

                        self.records.push(value);
                    });
                } else {
                    self.records = [];
                    self.recordsCount = 0;
                }
            });
        }

        function search() {
            if (self.searchText != '') {
                self.loadRecords(false, {});
            }
            else
                self.loadRecords(false);
        }

        function openAdvancedSearch() {
            var modalInstance = $modal.open({
                templateUrl: 'js/veiculo/veiculo-search.view.html',
                controller: 'veiculoSearchController as controller',
                size: 'md',
                resolve: {
                    data: function () {
                        return angular.copy(advancedSearch);
                    }
                }
            });

            modalInstance.result.then(function (params) {
                advancedSearch = angular.copy(params)

                addDisclaimers();
            });
        }

        function addDisclaimer(property, value, label) {
            self.disclaimers.push({
                property: property,
                value: value,
                title: label
            });
        }

        function addDisclaimers() {

            var filter = angular.copy(advancedSearch),
                fnFormatDate = function (date) {

                    return dateFilter(date, 'dd/MM/yyyy');
                }

            removeDisclaimers();

            if (filter.descricao) {
                addDisclaimer('descricao', '*' + filter.name + '*', 'Nome contém "' + filter.name + '"');
            }


            if (filter.marca) {
                addDisclaimer('marca', '*' + filter.address_street + '*', 'Endereço contém "' + filter.address_street + '"');
            }

            if (filter.modelo) {
                addDisclaimer('modelo', filter.doc_cpf, 'CPF igual a ' + filter.doc_cpf);
            }

            self.loadRecords();
        }

        function removeDisclaimer(disclaimer) {
            // pesquisa e remove o disclaimer do array
            var index = self.disclaimers.indexOf(disclaimer);

            if (index !== -1) {
                self.disclaimers.splice(index, 1);
            }

            if (disclaimer.property === 'descricao') {
                self.searchText = '';
            }

            self.loadRecords();
        }

        function removeDisclaimers() {
            self.disclaimers = [];
        }

        function applyEdit(newValue, field, customer) {
            var update = {};

            if (newValue !== customer[field]) {
                update[field] = newValue;

                veiculoFactory.updateRecord(customer.id, update);
            }
        }

        function onRemove(record) {
            notification.question({
                title: 'l-question',
                text: i18nFilter('l-confirm-delete-operation'),
                cancelLabel: 'l-no',
                confirmLabel: 'l-yes',
                callback: function (isPositiveResult) {
                    var index;

                    if (isPositiveResult) {
                        veiculoFactory.deleteRecord(record.id, function (result) {
                            if (result) {

                                index = self.records.indexOf(record);

                                if (index !== -1) {
                                    self.records.splice(index, 1);
                                    self.recordsCount -= 1;
                                }
                            }
                        });
                    }
                }
            });
        }
    };

}());
