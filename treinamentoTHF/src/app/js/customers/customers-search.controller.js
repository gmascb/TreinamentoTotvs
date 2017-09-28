/**
* @license TOTVS | Exemplo THF v1.0.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module customer
* @name CustomerSearchController
* @object controller
*
* @created 2017-9-12 v1.0.0
* @updated 2017-9-12 v1.0.0
*
* @requires
*
* @dependencies
*
* @description
*/

(function () {

    'use strict';

    angular
        .module('customer')
        .controller('CustomerSearchController', CustomerSearchController);

    CustomerSearchController.$inject = ['$modalInstance', 'data'];

    function CustomerSearchController($modalInstance, data) {

        // *********************************************************************************
		// *** Variables
		// *********************************************************************************

        var self = this;

        // *********************************************************************************
		// *** Public Properties and Methods
		// *********************************************************************************

        self.advancedSearch = angular.copy(data); // copia os dados da pesquisa anterior para o controller
        self.search = search;
        self.close = close;

        // *********************************************************************************
		// *** Functions
		// *********************************************************************************

        function search() {
            $modalInstance.close(self.advancedSearch);
        }

        function close() {
            $modalInstance.dismiss();
        }
    }

}());
