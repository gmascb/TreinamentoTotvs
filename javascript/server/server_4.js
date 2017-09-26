var app = angular.module('controllerApp', []);
app.service('exService', function($http) {

    this.getDados = function(callback) {
        $http.get("server/dados.json").then(function(response) {
            ret = response.data;
            if (callback)
                callback(response.data);
        });
    }

});