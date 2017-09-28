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
* @description Controller responsável por exibir os detalhes
*/

(function () {

    'use strict';

    angular
        .module('veiculoMod')
        .controller('veiculoDetailController', veiculoDetailController);

    veiculoDetailController.$inject = [
        '$stateParams',
        '$state',
        'totvs.app-notification.Service',
        'i18nFilter',
		'veiculoFactory'
    ];

    function veiculoDetailController(
        $stateParams, $state, notification, i18nFilter, veiculoFactory) {

        // *********************************************************************************
        // *** Variables
        // *********************************************************************************

        var self = this;

        // *********************************************************************************
        // *** Public Properties and Methods
        // *********************************************************************************

        self.veiculo = {};
        self.loadRecord = loadRecord;
        self.applyEdit = applyEdit;
        self.remove = remove;

        init();

        // *********************************************************************************
        // *** Controller Initialize
        // *********************************************************************************

        function init(cacheController) {

            if ($stateParams && $stateParams.id) {
                self.loadRecord($stateParams.id);
            } else {
                $state.go('veiculo.start');
            }

        }

        // *********************************************************************************
        // *** Functions
        // *********************************************************************************

        function loadRecord(id) {

            veiculoFactory.getRecord(id, function (veiculo) {
                if (veiculo && veiculo.IDVEICULO) {
                    self.veiculo = veiculo;
                } else {
                    notification.notify({
                        type: 'warning',
                        title: '404',
                        detail: 'Registro "' + id + '" não encontrado. Você será redirecionado a lista de registros!'
                    });

                    $state.go('veiculo.start');
                }
            });
        }

        function applyEdit(newValue, field) {
            var update = {};

            if (newValue !== self.veiculo[field]) {
                update[field] = newValue;
                veiculoFactory.updateRecord(self.customer.id, update);
            }
        }

        function remove() {
            notification.question({
                title: 'l-question',
                text: i18nFilter('l-confirm-delete-operation'),
                cancelLabel: 'l-no',
                confirmLabel: 'l-yes',
                callback: function (isPositiveResult) {
                    if (isPositiveResult) {
                        veiculoFactory.deleteRecord(self.veiculo.IDVEICULO, function (result) {
                            if (result) {
                                $state.go('veiculo.start');
                            }
                        });
                    }
                }
            });
        }
    };

}());
