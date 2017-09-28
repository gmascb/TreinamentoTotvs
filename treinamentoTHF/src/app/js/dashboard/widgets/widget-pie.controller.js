/**
* @license TOTVS | Exemplo THF v1.0.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module widget
* @name WidgetPieController
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
        .controller('WidgetPieController', WidgetPieController);

    WidgetPieController.$inject = [];

    function WidgetPieController() {

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
            self.series = [{
                data: [
                    {category: "Exemplo #1", value: 150, color: "#1E90FF"},
                    {category: "Exemplo #2", value: 300, color: "#87CEFA"}
                ]
            }];
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
