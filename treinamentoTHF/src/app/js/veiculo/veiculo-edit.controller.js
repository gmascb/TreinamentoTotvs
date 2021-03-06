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
        .controller('veiculoEditController', veiculoEditController);

    veiculoEditController.$inject = [
        '$scope',
        '$stateParams',
        '$state',
        '$window',
        'totvs.app-notification.Service',
        'i18nFilter',
		'veiculoFactory'
    ];

    function veiculoEditController(
        $scope, $stateParams, $state, $window, notification, i18nFilter, veiculoFactory) {

        // *********************************************************************************
        // *** Variables
        // *********************************************************************************

        var self = this;

        // *********************************************************************************
        // *** Public Properties and Methods
        // *********************************************************************************

        self.veiculo = {};
        self.cancel = cancel;
        self.save = save;
        self.saveNew = saveNew;
        self.cidades = [];
        self.estados = [];

        init();

        // *********************************************************************************
        // *** Controller Initialize
        // *********************************************************************************

        function init() {
            LoadLocalizaco();
        }

        // *********************************************************************************
        // *** Functions
        // *********************************************************************************
        function LoadLocalizaco() {
            veiculoFactory.GetCidade(function (result) {

                if (result.CodeReturn == 1) {
                    for (var i = 0; i < result.Data.length; i++) {
                        var obj = {};
                        obj.value = result.Data[i].CodLocalidade;
                        obj.label = result.Data[i].Nome;
                        self.cidades.push(obj);
                    }
                    veiculoFactory.GetEstado(function (result) {
                        if (result.CodeReturn == 1) {
                            for (var i = 0; i < result.Data.length; i++) {
                                var obj = {};
                                obj.value = result.Data[i].CodEstado;
                                obj.label = result.Data[i].Nome;
                                self.estados.push(obj);
                            }
                            if ($stateParams && $stateParams.id) {
                                loadRecord($stateParams.id);
                            }
                        }
                    });
                }
            });

        }

        function loadRecord(id) {

            veiculoFactory.getRecord(id, function (veiculo) {
                if (veiculo && veiculo.IDVEICULO) {
                    self.veiculo = veiculo;
                } else {
                    notification.notify({
                        type: 'warning',
                        title: '404',
                        detail: 'Registro "' + id + '" não encontrado, mas você pode inserir um novo registro. =P'
                    });

                    $state.go('veiculo.new');
                }
            });
        }

        function cancel() {
            notification.question({
                title: 'l-question',
                text: i18nFilter('l-cancel-operation'),
                cancelLabel: 'l-no',
                confirmLabel: 'l-yes',
                callback: function (isPositiveResult) {
                    if (isPositiveResult) {
                        $window.history.back();
                    }
                }
            });
        }

        function save() {
            self.veiculo.DATAATUALIZACAO = new Date();
            if (self.veiculo.IDVEICULO) {
                veiculoFactory.updateRecord(self.veiculo.IDVEICULO, self.veiculo, function (result) {
                    $state.go('veiculo.detail', { id: self.veiculo.IDVEICULO });
                });
            } else {
                self.veiculo.IDVEICULO = -1;
                self.veiculo.STATUS = 0;
                veiculoFactory.saveRecord(self.veiculo, function (result) {
                    $state.go('veiculo.detail', { id: result.IDVEICULO });
                });
            }
        }

        function saveNew() {
            if (self.veiculo.IDVEICULO) {
                veiculoFactory.updateRecord(self.veiculo.IDVEICULO, self.veiculo, function (result) {
                    $state.go('veiculo.new');
                });
            } else {
                veiculoFactory.saveRecord(self.veiculo, function (result) {
                    $state.go($state.current, {}, { reload: true });
                });
            }
        }

    }

}());
