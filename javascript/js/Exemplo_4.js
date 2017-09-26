app.controller('exemploController', ['$scope', 'exService', function($scope, exService) {
    $scope.vNome = '';
    $scope.vSobrenome = '';
    $scope.vValor = 0;
    $scope.ListUser = [];
    $scope.ListEmpreendimentos = [];
    $scope.ListParcelas = [];

    exService.getDados(function(result) {
        $scope.dados = result;
        for (var i = 0; i < $scope.dados.clientes.length; i++) {
            if ($scope.dados.clientes[i].ativo)
                $scope.ListUser.push($scope.dados.clientes[i].nome)
        }
    });

    $scope.changeUser = function() {
        $scope.ListEmpreendimentos = [];
        for (var i = 0; i < $scope.dados.empreendimentos.length; i++) {
            if ($scope.dados.empreendimentos[i].usuario == $scope.selectedUser) {
                $scope.ListEmpreendimentos.push($scope.dados.empreendimentos[i]);
            }
        }
    }

    $scope.changeEmpreendimentos = function(user) {
        $scope.ListParcelas = [];
        if ($scope.selectedEmpreend == null) return;
        for (var i = 0; i < $scope.dados.parcelas.length; i++) {
            if ($scope.dados.parcelas[i].codigo == $scope.selectedEmpreend.codigo) {
                if ($scope.dados.parcelas[i].usuario == $scope.selectedUser) {
                    for (var j = 0; j < $scope.dados.parcelas[i].parcela.length; j++) {
                        $scope.dados.parcelas[i].parcela[j].id = j;
                        $scope.ListParcelas.push($scope.dados.parcelas[i].parcela[j]);
                    }
                    return;
                }
            }
        }
    }

    $scope.dividirParcela = function(item) {
        if (item.status != 'pago') {
            $('#ItemArray').text(JSON.stringify(item));
            $("#modalAlert").modal();
        } else
            alert('Apenas parcelas pendentes poderão ser divididas');
    }

    $scope.executarAlteracao = function() {
        var obj = JSON.parse($('#ItemArray').text());
        var div = $('#ItemArray').attr('divparc');
        for (var i = 0; i < $scope.dados.parcelas.length; i++) {
            if ($scope.dados.parcelas[i].codigo == $scope.selectedEmpreend.codigo) {
                if ($scope.dados.parcelas[i].usuario == $scope.selectedUser) {
                    for (var j = 0; j < $scope.dados.parcelas[i].parcela.length; j++) {
                        if ($scope.dados.parcelas[i].parcela[j].status != 'pago') {
                            var id = $scope.dados.parcelas[i].parcela[j].id;
                            var valor = $scope.dados.parcelas[i].parcela[j].Valor;
                            if (obj.id == id) {
                                $scope.dados.parcelas[i].parcela[j].Valor = Math.round(valor / div, 2);
                                for (var k = 1; k < div; k++) {
                                    //var objnovo = $scope.dados.parcelas[i].parcela[j];
                                    var objnovo = angular.copy($scope.dados.parcelas[i].parcela[j]);
                                    objnovo.id = $scope.ListParcelas.length + 1;
                                    $scope.dados.parcelas[i].parcela.push(objnovo);
                                    $scope.ListParcelas.push(objnovo);
                                }
                                return;
                            }
                        }
                    }
                }
            }
        }
    }

}]);