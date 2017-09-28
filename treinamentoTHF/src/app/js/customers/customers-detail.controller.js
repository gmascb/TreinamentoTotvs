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
        .controller('CustomerDetailController', CustomerDetailController);

    CustomerDetailController.$inject = [
        '$stateParams',
        '$state',
        'totvs.app-notification.Service',
        'i18nFilter',
		'customerFactory'
    ];

	function CustomerDetailController(
        $stateParams, $state, notification, i18nFilter, customerFactory) {

		// *********************************************************************************
		// *** Variables
		// *********************************************************************************

		var self = this;

        // *********************************************************************************
		// *** Public Properties and Methods
		// *********************************************************************************

        self.customer = {};
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
                $state.go('customers.start');
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
                        detail: 'Registro "' + id + '" não encontrado. Você será redirecionado a lista de registros!'
                    });

                    $state.go('customers.start');
                }
			});
		}

        function applyEdit(newValue, field) {
            var update = {};

            if (newValue !== self.customer[field]) {
                update[field] = newValue;
                customerFactory.updateRecord(self.customer.id, update);
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
						customerFactory.deleteRecord(self.customer.id, function (result) {
							if (result) {
                                $state.go('customers.start');
							}
						});
					}
				}
			});
		}
	};

}());
