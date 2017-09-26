function Calular() {
    var alertDiv = document.getElementById('alert');
    var vReceita = document.getElementById('input3');
    alertDiv.attributes.style.value = '';
    if (isNaN(parseFloat(vReceita.value))) {
        alertDiv.className = "alert alert-danger";
        alertDiv.innerHTML = "O valor da receita esta invalido!";
        return;
    }
    var vDespesa = document.getElementById('input4');
    if (isNaN(parseFloat(vDespesa.value))) {
        alertDiv.className = "alert alert-danger";
        alertDiv.innerHTML = "O valor da despesa esta invalido!";
        return;
    }
    if (parseFloat(vReceita.value) >= parseFloat(vDespesa.value)) {
        alertDiv.className = "alert alert-success";
        alertDiv.innerHTML = "Mesmo com essa dispesa seu saldo será: " + (parseFloat(vReceita.value) - parseFloat(vDespesa.value));
        var tb = document.getElementById('linhaBody');
        var vNome = document.getElementById('input').value;
        var vSobrenome = document.getElementById('input2').value;
        tb.innerHTML += '<tr><td>' + ' ' + vNome + ' ' + vSobrenome + ': ' + alertDiv.innerHTML + '</td></tr>';
    } else {
        alertDiv.className = "alert alert-danger";
        alertDiv.innerHTML = "Você estará no negativo: " + (parseFloat(vDespesa.value) - parseFloat(vReceita.value));
    }
}

function verificaNome(text, idInput) {
    var alertDiv = document.getElementById('alert');
    var vNome = document.getElementById(idInput);
    var frase = vNome.value.split(' ');
    if (frase.length > 1) {
        alertDiv.attributes.style.value = '';
        alertDiv.className = "alert alert-danger";
        alertDiv.innerHTML = "O " + text + " nao pode ser composto";
    } else
        alertDiv.attributes.style.value = 'display:none';
}


function voltar() {
    window.history.back();
}