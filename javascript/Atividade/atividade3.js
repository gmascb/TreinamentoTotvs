
angular.module('trtApp', []).controller('trtController', ['$scope', function ($scope) {
    $scope.Paises = [
                    { id: 1, text: "Brasil" },
                    { id: 2, text: "Argentina" },
                    { id: 3, text: "Chile" },
                    { id: 4, text: "Equador" },
                    { id: 5, text: "Colombia" },
                    { id: 6, text: "Peru" }
    ];
    Novo();
    $scope.List = [];
    $scope.ListPaisAdd = [];

    $scope.incluir = function () {
        $scope.List.push($scope.Endereco);
        Novo();
        AddOptionFilter();
        alert('incluido com sucesso');
    }

    $scope.excluir = function (index) {
        $scope.List.splice(index, 1);
        AddOptionFilter();
    }

    $scope.editar = function (index) {
        $("#btnSalvar").hide();
        $("#btnEditar").show();
        $scope.Endereco.Id = index;
        $scope.Endereco.vEnd = $scope.List[index].vEnd;
        $scope.Endereco.vBairro = $scope.List[index].vBairro;
        $scope.Endereco.vCidade = $scope.List[index].vCidade;
        $scope.Endereco.vEstado = $scope.List[index].vEstado;
        $scope.Endereco.vPais = $scope.List[index].vPais;
    }

    $scope.salvar = function () {
        var index = $scope.Endereco.Id;
        $scope.List[index].vEnd = $scope.Endereco.vEnd;
        $scope.List[index].vBairro = $scope.Endereco.vBairro;
        $scope.List[index].vCidade = $scope.Endereco.vCidade;
        $scope.List[index].vEstado = $scope.Endereco.vEstado;
        $scope.List[index].vPais = $scope.Endereco.vPais;
        alert('alterado com sucesso');
        $("#btnSalvar").show();
        $("#btnEditar").hide();
        $scope.Endereco.Id = -1;
        Novo();
    }

    $scope.exibir = function () {
        $("#conteudo").show("slow");
    }

    $scope.ocultar = function () {
        $("#conteudo").hide("slow");
    }

    function Novo() {
        $scope.Endereco = {};
        $scope.Endereco.Id = -1;
        $scope.Endereco.vEnd = '';
        $scope.Endereco.vBairro = '';
        $scope.Endereco.vCidade = '';
        $scope.Endereco.vEstado = '';
        $scope.Endereco.vPais = '';
    }

    function AddOptionFilter() {
        $scope.ListPaisAdd = [];
        angular.forEach($scope.List, function (objend, index) {
            if ($scope.ListPaisAdd.length == 0)
                $scope.ListPaisAdd.push({ id: 0, text: "Todos" });

            var existe = false;
            for (var j = 0; j < $scope.ListPaisAdd.length; j++) {
                if (objend.vPais.id === $scope.ListPaisAdd[j].id)
                { existe = true; break; }
            }
            if (!existe)
                $scope.ListPaisAdd.push(objend.vPais);

        });
    }
}]);