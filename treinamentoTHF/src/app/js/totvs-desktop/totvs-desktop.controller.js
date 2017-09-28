/**
* @license TOTVS | Exemplo THF v1.0.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsDesktop
* @name TotvsDesktopController
* @object controller
*
* @created 2017-9-12 v1.0.0
* @updated 2017-9-12 v1.0.0
*
* @requires totvs-app.module
*
* @dependencies
*
* @description
*/

(function () {

    'use strict';

    angular
        .module('totvsDesktop')
        .controller('TotvsDesktopController', TotvsDesktopController);

    TotvsDesktopController.$inject = [
        '$timeout',
        '$location',
        'i18nFilter',
        'totvsDesktopMenuRecents',
        'totvsDesktopMenuFavorites',
        'totvsDesktopMenuPrograms',
        'totvsDesktopMenuProcesses',
        'TotvsDesktopSidebar'
    ];

    function TotvsDesktopController(
        $timeout,
        $location,
        i18nFilter,
        totvsDesktopMenuRecents,
        totvsDesktopMenuFavorites,
        totvsDesktopMenuPrograms,
        totvsDesktopMenuProcesses,
        TotvsDesktopSidebar) {

        // *********************************************************************************
		// *** Variables
		// *********************************************************************************

        var self = this,
            menus = {
                recs: $('#recs'),
                favs: $('#favs'),
                apps: $('#apps'),
                prcs: $('#prcs')
            };

        // *********************************************************************************
		// *** Public Properties and Methods
		// *********************************************************************************

        self.options = [];
        self.headerInformations = [];
        self.srcLogo = 'assets/img/totvs.png'; // TODO: Factory for logo
        self.selectedMenuGroup = undefined;
        self.recents = [];
        self.favorites = [];
        self.processes = [];
        self.applications = [];
        self.loadMenu = loadMenu;
        self.loadPrograms = loadPrograms;
        self.openMenuProgram = openMenuProgram;

        init();

        // *********************************************************************************
		// *** Controller Initialize
		// *********************************************************************************

        function init() {

            self.options = [
                {title: 'Config', action: optionAction, icon:  'cfg'},
                {title: 'Help', action: optionAction, icon: 'hlp'},
                {title: 'Logoff', action: optionAction, icon: 'off'}
            ];

            // TODO: Load information of server
            self.headerInformations = [
                {label: 'TOTVS S/A', action: headerAction},
                {label: 'Usuário: Admin'},
                {label: 'TOTVS | HTML Framework - 12.1.12'}
            ];

            // Load List Menu Recents
            totvsDesktopMenuRecents.getProgramRecents(function (data) {
                self.recents = angular.copy(data);
            });

            // Load List Menu Favorites
            totvsDesktopMenuFavorites.getProgramFavorites(function (data) {
                self.favorites = angular.copy(data);
            });

            // Load List Menu Applications
            totvsDesktopMenuPrograms.getProgramApplications(function (data) {
                self.applications = data;
            });

            // Load List Menu Processes
            totvsDesktopMenuProcesses.getMenuProcesses(function (data) {
                self.processes = data;
            });

            self.selectedMenuGroup = 'favs';

            // Função para o Menu Responsivo
            TotvsDesktopSidebar.init();

        }

        // *********************************************************************************
		// *** Functions
		// *********************************************************************************

        function optionAction(option) {
            // TODO: Execute action for options
        }

        function headerAction(information) {
            // TODO: Execute action for header actions
        }

        function loadMenu(menu) {

            if (self.selectedMenuGroup === menu) {
                return;
            }

            angular.forEach(menus, function (itemMenu) {
                itemMenu.next().slideUp();
            });

            menus[menu].next().slideDown();

            self.selectedMenuGroup = menu;
        }

        function loadPrograms(app) {
            self.selectedApplication = app;

            if (!app) {
                return;
            }

            self.applications.forEach(function (application) {
                if (application.id !== app.id) {
                    $('#' + application.id).next().slideUp();
                }
            });

            $('#' + app.id).next().slideDown();
        }

        function openMenuProgram(program) {

            if (!program) {
                return;
            }

            $location.url(program.url);
			TotvsDesktopSidebar.close();
        }
    }

}());

