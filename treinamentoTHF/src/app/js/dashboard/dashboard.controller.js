/**
* @license TOTVS | Exemplo THF v1.0.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module dashboard
* @name DashboardController
* @object controller
*
* @created 2017-9-12 v1.0.0
* @updated 2017-9-12 v1.0.0
*
* @requires dashboard.module
*
* @dependencies
*
* @description dashboard controller
*/

(function () {

    'use strict';

    angular
        .module('dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$state', 'dashboardFactory'];

    function DashboardController($state, dashboardFactory) {

        // *********************************************************************************
		// *** Variables
		// *********************************************************************************

        var self = this;

        // *********************************************************************************
		// *** Public Properties and Methods
		// *********************************************************************************

        self.dashboard = {};
        self.settings = settings;

        init();

        // *********************************************************************************
		// *** Controller Initialize
		// *********************************************************************************

        function init() {
            dashboardFactory.get(function (data) {
                self.dashboard = data;
            });
		}

        // *********************************************************************************
		// *** Functions
		// *********************************************************************************

        function settings() {
            $state.go('dashboard.settings');
        }
    }

}());
