/**
* @license TOTVS | Exemplo THF v1.0.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module veiculoMod
* @object module
*
* @created 2017-9-12 v1.0.0
* @updated 2017-9-12 v1.0.0
*
* @dependencies
*
* @description
*/

(function () {
    'use strict';

    angular
   .module('localidadeMod')
   .service('localidadezoom', localidadeZoom);

    // *********************************************************************************
    // *** ZOOM - Service para o Zoom de Empreendimentos
    // *********************************************************************************
    localidadeZoom.$inject = ['$injector', '$rootScope', 'localidadeFactory', 'i18nFilter'];

    function localidadeZoom($injector, $rootScope, localidadeFactory, i18nFilter) {
        var self = this;
        self.filter = [];
        self.CODIGO = i18nFilter("l-CODMUNICIPIO");
        self.NOME = i18nFilter("l-NOMEMUNICIPIO");
        self.CODETD = i18nFilter("l-CODETDMUNICIPIO");

        return {
            zoomResultList: [],
            resultTotal: 0,
            advancedSearch: false,
            configuration: false,
            zoomName: i18nFilter("l-localidade"),
            permissao: 0,
            propertyFields: [
              { label: self.CODIGO, property: 'CODMUNICIPIO' },
              { label: self.NOME, property: 'NOMEMUNICIPIO' },
              { label: self.CODETD, property: 'CODETDMUNICIPIO' }
            ],
            columnDefs: [
              { headerName: self.CODIGO, field: 'CODMUNICIPIO' },
              { headerName: self.NOME, field: 'NOMEMUNICIPIO' },
              { headerName: self.CODETD, field: 'CODETDMUNICIPIO' }
            ],
            getObjectFromValue: function (value) {
                if (self.zoomResultList) {
                    for (var i = 0; i < self.zoomResultList.length; i++) {
                        if (self.zoomResultList[i].CODMUNICIPIO == value) {
                            return self.zoomResultList[i];
                        }
                    }
                }
                return null;
            },
            returnValue: function (zoomid) {
                return this.$selected['NOMEMUNICIPIO'];
            },
            applyFilter: function (parameters) {
                // Filtros padrões
                var filter = [];
                var _self = this;
                var paramsReadView = {};

                if (parameters.init) {
                    filter = parameters.init;
                }

                debugger;
                // O serviço que retorna os dados para o zoom espera uma lista de filtros do tipo chave e valor.                
                if (parameters.selectedFilterValue != "" && parameters.selectedFilterValue != undefined) {
                    if (filter.length == 0)
                        filter[0] = parameters.selectedFilter.property + " LIKE :FILTER1";
                    else
                        filter[0] += " AND " + parameters.selectedFilter.property + " LIKE :FILTER1";
                    filter.push("%" + parameters.selectedFilterValue + "%");
                }

                // Caso tenha sido disparada a consulta através do botão mais resultados,
                // verifica a partir de qual registro a próxima pesquisa deve considerar.

                paramsReadView.start = (parameters.more ? _self.zoomResultList.length : 0);
                paramsReadView.limit = ((paramsReadView.start == 0) ? 16 : paramsReadView.start);

                _self.resultTotal = 0;
                if (!parameters.more) {
                    _self.zoomResultList = [];
                }

                if (filter.length == 0) {
                    filter[0] = "NOMEMUNICIPIO LIKE :FILTER1";
                    filter.push("%%%");
                }

                paramsReadView.filter = JSON.stringify(filter);

                localidadeFactory.findRecords(paramsReadView, function (result) {
                    if (result) {
                        angular.forEach(result, function (value) {
                            if (value && value.$length) {
                                _self.resultTotal = value.$length;
                            }

                            _self.zoomResultList.push(value);
                        });
                    }
                });
            },
            comparator: function (itemA, itemB) {
                return itemA.CODETD === itemB.CODETD;
            }
        }
    }

}());
