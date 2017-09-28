/**
* @license TOTVS | Exemplo THF v1.0.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsCustomer
* @name TotvsCustomerListController
* @object controller
*
* @created 2017-9-12 v1.0.0
* @updated 2017-9-12 v1.0.0
*
* @requires
*
* @dependencies
*
* @description Responsável por interagir com o REST, buscando e enviado informações para o servidor (back-end)
*/

(function () {

    'use strict';

    angular
        .module('veiculoMod')
        .factory('veiculoFactory', veiculoFactory);

    veiculoFactory.$inject = ['$totvsresource'];

    function veiculoFactory($totvsresource) {

        var url = '/rm/api/:data/:id',
            factory;

        factory = $totvsresource.REST(url, {}, {});

        factory.findRecords = findRecords; // Busca todos os registros
        factory.getRecord = getRecord; // Busca um registro específico
        factory.saveRecord = saveRecord; // Salva um novo registro
        factory.updateRecord = updateRecord; // Atualiza um registro
        factory.deleteRecord = deleteRecord; // Exclui um registro
        factory.GetEstado = GetEstado; // Exclui um registro
        factory.GetCidade = GetCidade; // Exclui um registro

        return factory;

        // *********************************************************************************
        // *** Functions
        // *********************************************************************************

        function findRecords(parameters, callback) {
            parameters.data = "rmsrestdataserver/IrmVeiculoData";
            return this.TOTVSQuery(parameters, callback);
        }

        function getRecord(id, callback) {
            var parameters = {};
            parameters.id = id;
            parameters.data = "rmsrestdataserver/IrmVeiculoData";
            return this.TOTVSGet(parameters, callback);
        }

        function saveRecord(model, callback) {
            var parameters = {};
            parameters.data = "rmsrestdataserver/IrmVeiculoData";
            return this.TOTVSSave(parameters, model, callback);
        }

        function updateRecord(id, model, callback) {
            var parameters = {};
            parameters.id = id;
            parameters.data = "rmsrestdataserver/IrmVeiculoData";
            return this.TOTVSUpdate(parameters, model, callback);
        }

        function deleteRecord(id, callback) {
            var parameters = {};
            parameters.id = id;
            parameters.data = "rmsrestdataserver/IrmVeiculoData";
            return this.TOTVSRemove(parameters, callback);
        }

        function GetEstado(callback) {
            var parameters = {};
            parameters.data = "IrmTreinamento/GetEstado";
            return this.TOTVSGet(parameters, callback);
        }

        function GetCidade(callback) {
            var parameters = {};
            parameters.data = "IrmTreinamento/GetCidade";
            return this.TOTVSGet(parameters, callback);
        }
    }

}());
