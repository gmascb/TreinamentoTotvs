/**
* @license TOTVS | Exemplo THF v1.0.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module widget
* @name WidgetTableController
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
        .module('widget')
        .controller('WidgetTableController', WidgetTableController);

    WidgetTableController.$inject = [];

    function WidgetTableController() {

        // *********************************************************************************
		// *** Variables
		// *********************************************************************************

        var self = this;

        // *********************************************************************************
		// *** Public Properties and Methods
		// *********************************************************************************

        self.listOfcountry = [];

        init();

        // *********************************************************************************
		// *** Controller Initialize
		// *********************************************************************************

        function init() {
            self.listOfcountry = [
                {id: 1, initial: 'BR', name: 'Brasil'},
                {id: 2, initial: 'FR', name: 'França'},
                {id: 3, initial: 'PT', name: 'Portugal'},
                {id: 4, initial: 'US', name: 'Estados Unidos'},
                {id: 5, initial: 'AR', name: 'Argentia'},
                {id: 6, initial: 'ME', name: 'México'},
                {id: 7, initial: 'EN', name: 'Inglaterra'},
                {id: 8, initial: 'JA', name: 'Japão'},
                {id: 9, initial: 'CH', name: 'China'}
            ];
        }
    }

}());
