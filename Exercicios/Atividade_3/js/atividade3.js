angular.module('controllerApp', []).controller('atividadeController', ['$scope', function($scope) {
    
    $scope.vLblCadastro = 'Ocultar Cadastro';
    $scope.vLblPesquisa = 'Ocultar Pesquisa';
    $scope.vId = 0;
    $scope.vEndereco = '';
    $scope.vBairro = '';
    $scope.vCidade = '';
    $scope.vEstado = '';
    $scope.vPais = '';
    $scope.vPaisSelecionado = '';
    $scope.ListPais = [];   
    $scope.ListTudo = [];

    $scope.menuCadastro = function() {
        $('#cadastro').toggle("slow", function(){
            if(isNaN($('#cadastro').attr("style")))
            {
                $scope.vLblCadastro = 'Mostrar Cadastro';
            }
            else
            {
                $scope.vLblCadastro = 'Ocultar Cadastro';
            }
            $scope.$apply();
        });
    }

    $scope.menuPesquisa = function() {        
        $('#pesquisa').toggle("slow", function(){
            if(isNaN($('#pesquisa').attr("style")))
            {
                $scope.vLblPesquisa = 'Mostrar Pesquisa';
            }
            else
            {
                 $scope.vLblPesquisa = 'Ocultar Pesquisa';
            }
            $scope.$apply();
        });
    }


    $scope.Cadastrar = function() {

        if ($scope.vEndereco.length == 0 || $scope.vBairro.length == 0 || $scope.vCidade.length == 0 || $scope.vEstado.length == 0 || $scope.vPais.length == 0) {
            $('#textErro').html('Todos os campos obrigatótios!');
            $('#modalAlert').modal();
            return;
        }

        var arrObjTudo = {};        
        
        arrObjTudo.id = $scope.ListTudo.length;
        arrObjTudo.endereco = $scope.vEndereco;
        arrObjTudo.bairro = $scope.vBairro;
        arrObjTudo.cidade = $scope.vCidade;
        arrObjTudo.estado = $scope.vEstado;
        arrObjTudo.pais = $scope.vPais;

        $scope.ListTudo.push(arrObjTudo);

        var adiciona = true;

        $.each($scope.ListPais, function (i, item) {
            if(item.pais == $scope.vPais)
              adiciona = false;
        });

        if(adiciona == true)
        {
            var arrObjPais = {};
            arrObjPais.id = $scope.ListPais.length;
            arrObjPais.pais = $scope.vPais;
            $scope.ListPais.push(arrObjPais);
        }
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