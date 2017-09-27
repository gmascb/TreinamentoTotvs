var app = angular.module('controllerApp', []);
app.service('exService', function($http) {

    this.getCEP = function(callback, CEP) {
        $http.get("http://viacep.com.br/ws/" + CEP + "/json/ ").then(function(response) {
            ret = response.data;
            if (callback)
                callback(response.data);
        });
    }

});