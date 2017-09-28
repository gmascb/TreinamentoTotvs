/**
* @license TOTVS | Exemplo THF v1.0.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module widget
* @name WidgetAreaController
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
        .controller('WidgetAreaController', WidgetAreaController);

    WidgetAreaController.$inject = [];

    function WidgetAreaController() {

        // *********************************************************************************
		// *** Variables
		// *********************************************************************************

        var self = this;

        // *********************************************************************************
		// *** Public Properties and Methods
		// *********************************************************************************

        self.series = [];
        self.setFnExport = setFnExport;

        init();

        // *********************************************************************************
		// *** Controller Initialize
		// *********************************************************************************

        function init() {
            self.series = [
                {name: "Série #1", color: "#87CEFA", data: [10, 20, 10, 20, 10]},
                {name: "Série #2", color: "#A9A9A9", data: [15, 25, 15, 25, 15]}
            ];
        }

        // *********************************************************************************
		// *** Functions
		// *********************************************************************************

        function setFnExport(obj) {
            self.exportToPdf = obj.pdf;
            self.exportToPng = obj.png;
        }
    }

}());
