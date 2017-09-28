/**
* @license TOTVS | Exemplo THF v1.0.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsApp
* @object module
*
* @created 2017-9-12 v1.0.0
* @updated 2017-9-12 v1.0.0
*
* @dependencies totvsHtmlFramework
*
* @description Main module app
*/

(function () {
    'use strict';

    angular
        .module('totvsApp', [
            'ngSanitize',
            'ui.router',
            'ui.mask',
            'ui.select',
            'totvsHtmlFramework',
            'totvsDesktop',
            'customer',
            'dashboard',
			'veiculoMod',
            'estadoMod',
            'localidadeMod'
        ]);

}());
