/**
* @license TOTVS | Exemplo THF v1.0.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module customer
* @object module
*
* @created 2017-9-12 v1.0.0
* @updated 2017-9-12 v1.0.0
*
* @dependencies
*
* @description Modulo veiculoMod
*/

(function () {
    'use strict';

    angular
        .module('veiculoMod')
        .config(veiculoModRouteConfig);

    veiculoModRouteConfig.$inject = ['$stateProvider'];

    function veiculoModRouteConfig($stateProvider) {

        $stateProvider.state('veiculo', {
            abstract: true,
            template: '<ui-view/>'

        }).state('veiculo.start', {
            url: '/veiculo',
            controller: 'veiculoListController',
            controllerAs: 'controller',
            templateUrl: 'js/veiculo/veiculo-list.view.html'

        }).state('veiculo.detail', {
            url: '/veiculo/detail/:id',
            controller: 'veiculoDetailController',
            controllerAs: 'controller',
            templateUrl: 'js/veiculo/veiculo-detail.view.html'

        }).state('veiculo.new', {
            url: '/veiculo/new',
            controller: 'veiculoEditController',
            controllerAs: 'controller',
            templateUrl: 'js/veiculo/veiculo-edit.view.html'

        }).state('veiculo.edit', {
            url: '/veiculo/edit/:id',
            controller: 'veiculoEditController',
            controllerAs: 'controller',
            templateUrl: 'js/veiculo/veiculo-edit.view.html'

        });
    }

}());
