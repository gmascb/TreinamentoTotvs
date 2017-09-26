function Adicionar() {
    var vNome = $('#input').val();
    var vSobrenome = $('#input2').val();
    var vValor = $('#input3').val();
    if (isNaN(parseFloat(vValor))) {
        $('#textErro').html('Valor invalido!');
        $('#modalAlert').modal();
        return;
    }
    if (vNome.length == 0 || vSobrenome.length == 0 || vValor.length == 0) {
        $('#textErro').html('Todos os campos obrigatótios!');
        $('#modalAlert').modal();
        return;
    }

    if ($('#chkValor').prop('checked')) {
        var htm = '<tr>';
        htm += '<td><input type="checkbox" class="extratochk" /></td>';
        htm += '<td>' + vNome + '</td>';
        htm += '<td>' + vSobrenome + '</td>';
        htm += '<td><span class="badge" style="background-color:green"> + ' + vValor + '</span></td>';
        htm += '</tr>';
        $('table tbody').append(htm);
    } else {
        var htm = '<tr>';
        htm += '<td><input type="checkbox" class="extratochk" /></td>';
        htm += '<td>' + vNome + '</td>';
        htm += '<td>' + vSobrenome + '</td>';
        htm += '<td><span class="badge" style="background-color:red"> - ' + vValor + '</span></td>';
        htm += '</tr>';
        $('table tbody').append(htm);
    }
}

function excluir() {
    $('tbody input:checked').each(function () {
        $(this).parent().parent().remove();
    });
}

function voltar() {
    window.history.back();
}

$(document).ready(function () {
    debugger;
    $("#btnExcluir").click(function () { excluir(); });
    $("#btnAdd").click(function () { Adicionar(); });
});