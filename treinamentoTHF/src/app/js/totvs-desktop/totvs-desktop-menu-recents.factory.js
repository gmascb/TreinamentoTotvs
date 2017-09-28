/**
* @license TOTVS | Exemplo THF v1.0.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsMenu
* @name totvsMenuRecents
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
        .factory('totvsDesktopMenuRecents', totvsDesktopMenuRecents);

    totvsDesktopMenuRecents.$inject = [];

    function totvsDesktopMenuRecents() {

        var recents = [],
            factory = {
                getProgramRecents: getProgramRecents
            };

        return factory;

        function getProgramRecents(callback) {

            // TODO: Get list of server
            if (recents.length === 0) {
                recents = GenerateRecents();
            }

            callback(recents);
        }

    }

    // ********************************************************************
    // Function - Simulation
    // ********************************************************************

    function GenerateRecents() {
        var i,
            max = 0,
            recents = [];

        max = Math.floor((Math.random() * 20) + 1);

        for (i = 1; i <= max; i++) {
            recents.push(new Recent(
                'Recente #' + i,
                '/'
            ));
        }

        return recents;
    }

    function Recent(program, url) {
        this.program = program || '[program]';
        this.url = url || '/';
    }

}());
