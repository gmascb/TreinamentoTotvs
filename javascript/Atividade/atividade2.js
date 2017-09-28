
window.onload = function () {

    $("#btnSalvar").click(function () {
        incluir();
    });

    $("#btnEditar").click(function () {
        salvar();
    });

    $("#btnExbHistorico").click(function () {
        exibir();
    });
    $("#btnOctEistorico").click(function () {
        ocultar();
    });

    $("#slt_PaisCad").change(function () {
        fitltraPaises();
    });
}

var listEnderecos = [];
function objetoEndereco() {
    var endereco = {};
    endereco.end = "";
    endereco.bairro = "";
    endereco.cidade = "";
    endereco.estado = "";
    endereco.pais = "";
    return endereco;
}

function MaxId() {
    if (listEnderecos.length == 0)
        return 1;
    else {
        var max = -1;
        for (var i = 0; i < listEnderecos.length; i++) {
            if (listEnderecos[i].id > max) {
                max = listEnderecos[i].id
            }
        }
        return max + 1;
    }
}

function incluir() {
    var objEnd = new objetoEndereco();
    objEnd.id = MaxId();
    objEnd.end = $('#txtEnd').val();
    objEnd.bairro = $('#txtBairro').val();
    objEnd.cidade = $('#txtCidade').val();
    objEnd.estado = $('#txtEstado').val();
    objEnd.pais = $('#slt_Pais').find(":selected").text();
    listEnderecos.push(objEnd);
    alert('Incluido com sucesso');
    clear();
}

function clear() {
    clearinput('#txtEnd');
    clearinput('#txtBairro');
    clearinput('#txtCidade');
    clearinput('#txtEstado');
}

function clearinput(id) {
    $(id).val("");
}

function addOption() {
    $("#slt_PaisCad").html("");
    var listPaisesCadastrados = [];
    if (listPaisesCadastrados.length == 0)
        listPaisesCadastrados.push("Todos");
    for (var i = 0; i < listEnderecos.length; i++) {
        var existe = false;
        for (var j = 0; j < listPaisesCadastrados.length; j++) {
            if (listEnderecos[i].pais === listPaisesCadastrados[j])
            { existe = true; break; }
        }
        if (!existe)
            listPaisesCadastrados.push(listEnderecos[i].pais);
    }

    $.each(listPaisesCadastrados, function (i, item) {
        $('#slt_PaisCad').append($('<option></option>', {
            value: i,
            text: item
        }));
    });
}

function excluir(id) {
    var index = -1;
    for (var i = 0; i < listEnderecos.length; i++) {
        if (id === listEnderecos[i].id) {
            index = i;
            break;
        }
    }
    if (index > -1)
        listEnderecos.splice(index, 1);
    fitltraPaises();
}
function salvar() {
    var id = $("#txtId").val();
    var index = -1;
    for (var i = 0; i < listEnderecos.length; i++) {
        if (parseInt(id) === listEnderecos[i].id) {
            index = i;
            break;
        }
    }
    listEnderecos[index].end = $('#txtEnd').val();
    listEnderecos[index].bairro = $('#txtBairro').val();
    listEnderecos[index].cidade = $('#txtCidade').val();
    listEnderecos[index].estado = $('#txtEstado').val();
    listEnderecos[index].pais = $('#slt_Pais').find(":selected").text();
    alert('alterado com sucesso');
    $("#btnSalvar").show();
    $("#btnEditar").hide();
    $("#txtId").val(-1)
    clear();
}

function editar(id) {
    var index = -1;
    for (var i = 0; i < listEnderecos.length; i++) {
        if (id === listEnderecos[i].id) {
            index = i;
            break;
        }
    }
    if (index > -1) {
        $("#btnSalvar").hide();
        $("#btnEditar").show();
        $("#txtId").val(listEnderecos[index].id);
        $('#txtEnd').val(listEnderecos[index].end);
        $('#txtBairro').val(listEnderecos[index].bairro);
        $('#txtCidade').val(listEnderecos[index].cidade);
        $('#txtEstado').val(listEnderecos[index].estado);
        $("#slt_Pais option").each(function (e, item) {
            if (item.text == listEnderecos[index].pais) {
                $(item).prop('selected', true);
                return;
            }
        });
        // $("#slt_Pais").text(listEnderecos[index].pais);
    }
}


function exibir() {
    $("#conteudo").show("slow");
    addOption();
    $("#Corpotabela").html("");
    var linhas = "";
    for (var i = 0; i < listEnderecos.length; i++) {
        $("#Corpotabela").append('<tr id="end' + listEnderecos[i].id + '"><td>' + listEnderecos[i].end + '</td><td>' + listEnderecos[i].bairro + '</td><td>' + listEnderecos[i].cidade + '</td><td>' + listEnderecos[i].estado + '</td><td><a id="btnexcluir" class="btn btn-danger" onclick="excluir(' + listEnderecos[i].id + ')">excluir</a></td><td><a id="btneditar" class="btn btn-success" onclick="editar(' + listEnderecos[i].id + ')">editar</a></td></tr>');
    }
}

function fitltraPaises() {
    debugger;
    $("#Corpotabela").html("");
    var pais = $('#slt_PaisCad').find(":selected").text();
    var linhas = "";
    for (var i = 0; i < listEnderecos.length; i++) {
        if (pais == listEnderecos[i].pais || pais == "Todos")
            $("#Corpotabela").append('<tr id="end' + listEnderecos[i].id + '"><td>' + listEnderecos[i].end + '</td><td>' + listEnderecos[i].bairro + '</td><td>' + listEnderecos[i].cidade + '</td><td>' + listEnderecos[i].estado + '</td><td><a id="btnexcluir" class="btn btn-danger" onclick="excluir(' + listEnderecos[i].id + ')">excluir</a></td><td><a id="btneditar" class="btn btn-success" onclick="editar(' + listEnderecos[i].id + ')">editar</a></td></tr>');
    }
}


function ocultar() {
    $("#conteudo").hide("slow");
}