var listEndereco = [];
function objetoEndereco(){
    var endereco = {};
    endereco.id = 0;
    endereco.endereco = "";
    endereco.cidade = "";
    endereco.estado = "";
    endereco.pais = "";
    return endereco;
}

window.onload = function(){
    $('#menuCadastro').click(function(){
        $('#cadastro').toggle("slow", function(){
            if(isNaN($('#cadastro').attr("style")))
            {
                $('#menuCadastro').html('Mostrar Cadastro');
            }
            else
            {
                $('#menuCadastro').html('Ocultar Cadastro');
            }
        });
    });

    $('#menuPesquisa').click(function(){
        $('#pesquisa').toggle("slow", function(){
            if(isNaN($('#pesquisa').attr("style")))
            {
                $('#menuPesquisa').html('Mostrar Pesquisa');
            }
            else
            {
                $('#menuPesquisa').html('Ocultar Pesquisa');
            }
        });
    });

    $('#btnCadastrar').click(function(){
        Cadastrar();
    });
}

function Cadastrar(){
    var objEnd = new objetoEndereco();
    //objEnd.id = MaxId();
    objEnd.endereco = $("#inputEndereco").val();
    
    objEnd.bairro = $("#InputBairro").val();
    objEnd.cidade = $("#inputCidade").val();
    objEnd.estado = $("#inputEstado").val();
    objEnd.pais = $("#inputPais").val();
    listEndereco.push(objEnd);

    var adicionar = true;

    $('#sltPais option').each(function (i, item) {
        if(item.text == "objEnd.pais")
            adicionar = false;
    });

    if(adicionar == true)
        $('#sltPais').append($('<option>', { 
            value: objEnd.id,
            text : objEnd.pais 
        }));

}

function addPaisLista (){
    $.each(items, function (i, item) {
        $('#mySelect').append($('<option>', { 
            value: item.value,
            text : item.text 
        }));
    });
}

function Pesquisar(){
    
}
