/**
* @license TOTVS | Exemplo THF v1.0.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module dashboard
* @name dashboard
* @object service
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
        .module('dashboard')
        .factory('dashboardFactory', dashboardFactory);

    dashboardFactory.$inject = [];

    function dashboardFactory() {

        var dashboard,
            factory = {
                save: save,
                get: get
            };

        return factory;

        function save(data, callback) {
            if (data) {
                dashboard = angular.copy(data);
            }

            callback(dashboard);
        }

        function get(callback) {
            // TODO: Get list of server
            if (!dashboard) {
                dashboard = GenerateDashboard();
            }

            callback(angular.copy(dashboard));
        }
    }

    // ********************************************************************
    // Function - Simulation
    // ********************************************************************

    function GenerateDashboard () {
        return {
            name: 'Dashboard',
            header: 'Dashboard',
            widgets: [
                {name: 'Widget Area', size: 'full', source: 'widget-area.view.html'},
                {name: 'Widget Pie', size: 'half', source: 'widget-pie.view.html'},
                {name: 'Widget Table', size: 'half', source: 'widget-table.view.html'}
            ]
        };
    }

}());
