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
    objEnd.end = getValue('txtEnd');
    objEnd.bairro = getValue('txtBairro');
    objEnd.cidade = getValue('txtCidade');
    objEnd.estado = getValue('txtEstado');
    var paisselected = document.getElementById("slt_Pais");
    objEnd.pais = paisselected.options[paisselected.selectedIndex].text;
    listEnderecos.push(objEnd);
    clearinput('txtEnd');
    clearinput('txtBairro');
    clearinput('txtCidade');
    clearinput('txtEstado');
    alert('Incluido com sucesso');
}

function getValue(id) {
    return document.getElementById(id).value;
}
function clearinput(id) {
    document.getElementById(id).value = "";
}

function addOption() {
    var x = document.getElementById("slt_PaisCad");
    x.innerHTML = "";

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

    for (var j = 0; j < listPaisesCadastrados.length; j++) {
        var x = document.getElementById("slt_PaisCad");
        var option = document.createElement("option");
        option.text = listPaisesCadastrados[j];
        x.add(option);
    }
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

function exibir() {
    document.getElementById("conteudo").removeAttribute("hidden");
    addOption();
    var corpotabela = document.getElementById("Corpotabela");
    corpotabela.innerHTML = "";
    var linhas = "";
    for (var i = 0; i < listEnderecos.length; i++) {
        linhas += '<tr id="end' + listEnderecos[i].id + '"><td>' + listEnderecos[i].end + '</td><td>' + listEnderecos[i].bairro + '</td><td>' + listEnderecos[i].cidade + '</td><td>' + listEnderecos[i].estado + '</td><td><a id="btnexcluir" class="btn btn-danger" onclick="excluir(' + listEnderecos[i].id + ')">excluir</a></td></tr>';
    }
    corpotabela.innerHTML = linhas;
}

function fitltraPaises() {
    var corpotabela = document.getElementById("Corpotabela");
    var paisselected = document.getElementById("slt_PaisCad");
    var pais = paisselected.options[paisselected.selectedIndex].text;
    corpotabela.innerHTML = "";
    var linhas="";
    for (var i = 0; i < listEnderecos.length; i++) {
        if (pais == listEnderecos[i].pais || pais == "Todos")
            linhas += '<tr id="end' + listEnderecos[i].id + '"><td>' + listEnderecos[i].end + '</td><td>' + listEnderecos[i].bairro + '</td><td>' + listEnderecos[i].cidade + '</td><td>' + listEnderecos[i].estado + '</td><td><a id="btnexcluir" class="btn btn-danger" onclick="excluir(' + listEnderecos[i].id + ')">excluir</a></td></tr>';
    }
    corpotabela.innerHTML = linhas;
}


function ocultar() {
    document.getElementById("conteudo").setAttribute("hidden", "hidden");
}