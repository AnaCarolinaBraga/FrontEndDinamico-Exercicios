const root = document.getElementById('root')

const div = document.createElement('div')

const h6 = document.createElement('h6')
var texto2 = document.createTextNode('Você não tem atividades')

const table = document.getElementById('tabelaAtividades')

var contagemCaractere = document.getElementById("contagemCaracteres")
var inputAtividade = document.getElementById("novaatividade")

var contador = 0;
var contaLetras = 0;

inputAtividade.addEventListener('keydown', function (e) {
    var char = e.keyCode || e.which;
    if (contaLetras > 19 && char !=8 && char != 46) {
        e.preventDefault()
        contagemCaractere.style.color = "red"
    } else {
        contagemCaractere.style.color = "black"
        contaLetras = inputAtividade.value.length;
    }
    contagemCaractere.textContent = contaLetras + "/20"
});

window.addEventListener('submit', () => {
    contaLetras = 0;
    contagemCaractere.textContent = contaLetras + "/20";
    contagemCaractere.style.color = "black"

    const forms = document.forms
    const atividade = forms.todolist.novaatividade
    const linhaCriada = document.createElement('tr')
    const colunaCriada = document.createElement('td')
    colunaCriada.setAttribute('contenteditable', 'false')
    colunaCriada.innerText = atividade.value;
    colunaCriada.style.minWidth = "200px"
    colunaCriada.style.maxWidth = "200px"

    atividade.value = ''

    const botaoCriado = document.createElement('td')
    var input = document.createElement("input");
    input.type = 'button';
    input.value = 'Deletar'
    input.setAttribute('onclick', 'deleteRow(this)')


    const botaoEditar = document.createElement('td')
    var editar = document.createElement("input");
    editar.type = 'button';
    editar.value = 'Editar'
    editar.setAttribute('onclick', 'editcontent(this)')

    table.appendChild(linhaCriada)
    linhaCriada.appendChild(colunaCriada)
    botaoCriado.appendChild(input)
    linhaCriada.appendChild(botaoCriado)
    botaoEditar.appendChild(editar)
    linhaCriada.appendChild(botaoEditar)
    h6.before(table)
    contador++
    contadorDeAtividades()
})

var editando = false;

function editcontent(r) {

    if (editando == true) {
        var i = r.parentNode.parentNode;
        i.firstChild.setAttribute("contentEditable", "false")
    } else {
        var i = r.parentNode.parentNode;
        i.firstChild.setAttribute("contentEditable", "true")
    }

    if (editando) {
        editando = false
        i.firstChild.style.background = "white"

    } else {
        editando = true
        i.firstChild.style.background = "#bfbfbf"
    }

}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    tabelaAtividades.deleteRow(i);
    contador--
    contadorDeAtividades()
}

function ClearAll() {
    var tableRows = tabelaAtividades.getElementsByTagName('tr');
    var rowCount = tableRows.length;

    for (var x = rowCount - 1; x >= 0; x--) {
        tabelaAtividades.removeChild(tableRows[x]);
    }

    contador = 0
    contadorDeAtividades()
}

function contadorDeAtividades() {

    if (contador == 0) {
        texto2.textContent = 'Você não tem atividades'
    } else if (contador == 1) {
        texto2.textContent = "Você tem " + contador + " atividade"
    } else {
        texto2.textContent = "Você tem " + contador + " atividades"
    }
}



h6.appendChild(texto2)
root.appendChild(h6)
root.appendChild(table)
