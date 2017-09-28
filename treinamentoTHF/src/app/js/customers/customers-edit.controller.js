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
        .module('customer')
        .controller('CustomerEditController', CustomerEditController);

    CustomerEditController.$inject = [
        '$scope',
        '$stateParams',
        '$state',
        '$window',
        'totvs.app-notification.Service',
        'i18nFilter',
		'customerFactory'
    ];

	function CustomerEditController(
        $scope, $stateParams, $state, $window, notification, i18nFilter, customerFactory) {

		// *********************************************************************************
		// *** Variables
		// *********************************************************************************

		var self = this;

        // *********************************************************************************
		// *** Public Properties and Methods
		// *********************************************************************************

        self.customer = {};
        self.cancel = cancel;
        self.save = save;
        self.saveNew = saveNew;

        init();

        // *********************************************************************************
		// *** Controller Initialize
		// *********************************************************************************

        function init() {

            if ($stateParams && $stateParams.id) {
                loadRecord($stateParams.id);
            }

        }

		// *********************************************************************************
		// *** Functions
		// *********************************************************************************

		function loadRecord(id) {
			customerFactory.getRecord(id, function (customer) {
				if (customer && customer.id) {
					self.customer = customer;
				} else {
                    notification.notify({
                        type: 'warning',
                        title: '404',
                        detail: 'Registro "' + id + '" não encontrado, mas você pode inserir um novo registro. =P'
                    });

                    $state.go('customers.new');
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
			if (self.customer.id) {
				customerFactory.updateRecord(self.customer.id, self.customer, function (result) {
					$state.go('customers.detail', {id: self.customer.id});
				});
			} else {
				customerFactory.saveRecord(self.customer, function (result) {
					$state.go('customers.detail', {id: result.id});
				});
			}
		}

        function saveNew() {
			if (self.customer.id) {
				customerFactory.updateRecord(self.customer.id, self.customer, function (result) {
					$state.go('customers.new');
				});
			} else {
				customerFactory.saveRecord(self.customer, function (result) {
                    $state.go($state.current, {}, {reload: true});
				});
			}
		}

	}

}());
