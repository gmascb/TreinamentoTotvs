/**
* @license TOTVS | Exemplo THF v1.0.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsDesktop
* @name totvsDesktopTab
* @object directive
*
* @created 2017-9-12 v1.0.0
* @updated 2017-9-12 v1.0.0
*
* @requires
*
* @dependencies
*
* @description
*
* @restrict E
*/

(function () {

    'use strict';

    angular
        .module('totvsDesktop')
        .directive('totvsDesktopTab', totvsDesktopTab);

    totvsDesktopTab.$inject = [];

    function totvsDesktopTab() {

        var directive = {
            template:
                '<div id="menu-topbar">' +
                    '<div class="btn-group pull-left" id="menu-tabs" role="group" aria-label="menu-tabs"> ' +
                        '<div class="btn btn-module btn-home" role="button"></div>' +
                    '</div> ' +
                    '<div class="btn-group pull-right" id="menu-options"> ' +
                        '<button ng-repeat="option in tOptions" type="button" ' +
                            ' title="{{option.title}}" class="btn btn-{{option.icon}} hidden-xs" ' +
                            ' ng-click="option.action(option)"></button> ' +
                    '</div>' +
                '</div>',
            restrict: 'E',
            replace: true,
            scope: {
                tOptions: '='
            }
        };

        return directive;
    }

}());
