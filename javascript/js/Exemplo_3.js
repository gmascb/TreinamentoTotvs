angular.module('controllerApp', []).controller('exemploController', ['$scope', function($scope) {
    $scope.vNome = '';
    $scope.vSobrenome = '';
    $scope.vValor = 0;
    $scope.List = [];

    $scope.Adicionar = function() {
        if (isNaN(parseFloat($scope.vValor))) {
            $('#textErro').html('Valor invalido!');
            $('#modalAlert').modal();
            return;
        }

        if ($scope.vNome.length == 0 || $scope.vSobrenome.length == 0 || $scope.vValor.length == 0) {
            $('#textErro').html('Todos os campos obrigatótios!');
            $('#modalAlert').modal();
            return;
        }
        var arrObj = {};
        arrObj.id = $scope.List.length;
        arrObj.nome = $scope.vNome;
        arrObj.sobrenome = $scope.vSobrenome;
        arrObj.valor = $scope.vValor;
        if ($('#chkValor').prop('checked')) {
            arrObj.tipo = 1;
            $scope.List.push(arrObj);
        } else {
            arrObj.tipo = 0;
            $scope.List.push(arrObj);
        }
        $('#input3').focus();
    }

    $scope.excluir = function() {
        var list = angular.element(document.querySelectorAll('tbody input:checked'));
        angular.forEach(list, function(chk, key) {
            var id = $(chk).attr('idobj');
            for (var i = 0; i < $scope.List.length; i++) {
                if ($scope.List[i].id == id)
                    $scope.List.splice(i, 1);
            }
        });
    }

    $scope.voltar = function() {
        window.history.back();
    }
}]);


