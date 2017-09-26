var listEndereco = [];
function objetoEndereco(){
    var endereco = {};
    endereco.endereco = "";
    endereco.cidade = "";
    endereco.estado = "";
    endereco.pais = "";
    return endereco;
}

function MostrarCadastro(){
    var divCadastro = document.getElementById('cadastro');
    var aMenuCadastro = document.getElementById('menuCadastro');

    if(isNaN(divCadastro.style.display))
    {
        divCadastro.style = "";
        aMenuCadastro.innerHTML = "Ocutar Cadastro";
    }
    else
    {
        divCadastro.style = "display: none;";
        aMenuCadastro.innerHTML = "Mostrar Cadastro";
    }
}

function MostrarPesquisa(){
    var divPesquisa = document.getElementById('pesquisa');
    var aMenuPesquisa = document.getElementById('menuPesquisa');

    if(isNaN(divPesquisa.style.display))
    {
        divPesquisa.style = "";
        aMenuPesquisa.innerHTML = "Ocutar Pesquisa";
    }
    else
    {
        divPesquisa.style = "display: none;";
        aMenuPesquisa.innerHTML = "Mostrar Pesquisa";
    }
}

function Cadastrar(){
    var objEnd = new objetoEndereco();
    objEnd.id = MaxId();
    object.endereco = getValue("InputEndereco");
    object.cidade = getValue("inputCidade");
    object.estado = getValue("inputEstado");
    object.pais = getValue("inputPais");
    listEndereco.push(objEnd);
}

function getValue(id){
    return document.getElementById(id).value;
}

function getValue(id){
    return document.getElementById(id).value = "";
}

function Pesquisar(){
    
}
