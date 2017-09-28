/**
* @license TOTVS | Exemplo THF v1.0.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsMenu
* @name totvsMenuPrograms
* @object factory
*
* @created 2017-9-12 v1.0.0
* @updated 2017-9-12 v1.0.0
*
* @requires totvs-menu.module
*
* @dependencies
*
* @description
*/

(function () {

    'use strict';

    angular
        .module('totvsDesktop')
        .factory('totvsDesktopMenuPrograms', totvsDesktopMenuPrograms);

    totvsDesktopMenuPrograms.$inject = [];

    function totvsDesktopMenuPrograms() {

        var applications = [],
            factory = {
                getProgramApplications: getProgramApplications
            };

        return factory;

        function getProgramApplications(callback) {
            // TODO: Get list of server
            if (applications.length === 0) {
                applications = GenerateMenuApplications();

                applications.splice(0, 0,
                    new MenuApplication(999, 'Exemplos', [
                        new Program('Veículo', '/veiculo', 3),
						new Program('Sample of CRUD', '/customers', 2),
                        new Program('Sample of Dashboard', '/dashboard', 1)
                    ])
                );
            }

            callback(applications);
        }

    }

    // ********************************************************************
    // Function - Simulation
    // ********************************************************************

    function GenerateMenuApplications() {
        var i,
            max = 0,
            menuApplications = [];

        max = Math.floor((Math.random() * 5) + 5);

        for (i = 1; i <= max; i++) {
            menuApplications.push(new MenuApplication(
                i,
                'Application #' + i,
                GeneratePrograms(i)
            ));
        }

        return menuApplications;
    }

    function MenuApplication(id, application, programs) {
        this.id = id || 1;
        this.application = application || '[application]';
        this.programs = programs || [];
    }

    function GeneratePrograms(id) {
        var i,
            max = 0,
            programs = [];

        max = Math.floor((Math.random() * 5) + 2);

        for (i = 1; i <= max; i ++) {
            programs.push(new Program(
                'Programa #' + id + '.' + i,
                '/'
            ));
        }

        return programs;
    }

    function Program(program, url) {
        this.program = program || '[program]';
        this.url = url || '/';
    }

}());
