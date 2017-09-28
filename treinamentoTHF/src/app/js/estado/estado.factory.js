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
        .module('estadoMod')
        .factory('estadoFactory', estadoFactory);

    estadoFactory.$inject = ['$totvsresource'];

    function estadoFactory($totvsresource) {

        var url = '/rm/api/:data/:id',
            factory;

        factory = $totvsresource.REST(url, {}, {});

        factory.findRecords = findRecords; // Busca todos os registros
        factory.getRecord = getRecord; // Busca um registro específico
        factory.saveRecord = saveRecord; // Salva um novo registro
        factory.updateRecord = updateRecord; // Atualiza um registro
        factory.deleteRecord = deleteRecord; // Exclui um registro        

        return factory;

        // *********************************************************************************
        // *** Functions
        // *********************************************************************************

        function findRecords(parameters, callback) {
            parameters.data = "rmsrestdataserver/FisEtdDataBR";
            return this.TOTVSQuery(parameters, callback);
        }

        function getRecord(id, callback) {
            var parameters = {};
            parameters.id = id;
            parameters.data = "rmsrestdataserver/FisEtdDataBR";
            return this.TOTVSGet(parameters, callback);
        }

        function saveRecord(model, callback) {
            var parameters = {};
            parameters.data = "rmsrestdataserver/FisEtdDataBR";
            return this.TOTVSSave(parameters, model, callback);
        }

        function updateRecord(id, model, callback) {
            var parameters = {};
            parameters.id = id;
            parameters.data = "rmsrestdataserver/FisEtdDataBR";
            return this.TOTVSUpdate(parameters, model, callback);
        }

        function deleteRecord(id, callback) {
            var parameters = {};
            parameters.id = id;
            parameters.data = "rmsrestdataserver/FisEtdDataBR";
            return this.TOTVSRemove(parameters, callback);
        }
    }

}());
