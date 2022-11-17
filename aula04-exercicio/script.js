const root = document.getElementById('root')
const div = document.createElement('div')
const h6 = document.createElement('h6')
var texto2 = document.createTextNode('Você não tem atividades')
const table = document.getElementById('tabelaAtividades')
var contagemCaractere = document.getElementById("contagemCaracteres")
var inputAtividade = document.getElementById("novaatividade")

var contadorTarefas = 0;
var contaLetras = 0;
var editando = false;

inputAtividade.addEventListener('keypress', (e) => charCount(e));
window.addEventListener('submit', () => createCompleteRow())

function charCount(e){
    var char = e.keyCode || e.which;
    if (contaLetras > 19 && char !=8 && char != 46) {
        e.preventDefault()
        contagemCaractere.style.color = "red"
    } else {
        contagemCaractere.style.color = "black"
        contaLetras = inputAtividade.value.length;
    }
    contagemCaractere.textContent = contaLetras + "/20"
}

function createCompleteRow(){
    contaLetras = 0;
    contagemCaractere.textContent = contaLetras + "/20";
    contagemCaractere.style.color = "black"

    const forms = document.forms
    const atividade = forms.todolist.novaatividade

    if(atividade.value.length != 0){
        const linhaCriada = document.createElement('tr')
        const colunaCriada = document.createElement('td')
        colunaCriada.setAttribute('contenteditable', 'false')
        colunaCriada.innerText = atividade.value;
        colunaCriada.style.minWidth = "200px"
        colunaCriada.style.maxWidth = "200px"
    
        atividade.value = ''
        atividade.focus()
    
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
        contadorTarefas++
        contadorDeAtividades()
    }
}

function editcontent(r) {

    if (editando == true) {
        var i = r.parentNode.parentNode;
        i.firstChild.setAttribute("contentEditable", "false")
    } else {
        var i = r.parentNode.parentNode;
        i.firstChild.setAttribute("contentEditable", "true")
        i.firstChild.focus()
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
    contadorTarefas--
    contadorDeAtividades()
}

function ClearAll() {
    var tableRows = tabelaAtividades.getElementsByTagName('tr');
    var rowCount = tableRows.length;

    for (var x = rowCount - 1; x >= 0; x--) {
        tabelaAtividades.removeChild(tableRows[x]);
    }

    contadorTarefas = 0
    contadorDeAtividades()
}

function contadorDeAtividades() {

    if (contadorTarefas == 0) {
        texto2.textContent = 'Você não tem atividades'
    } else if (contadorTarefas == 1) {
        texto2.textContent = "Você tem " + contadorTarefas + " atividade"
    } else {
        texto2.textContent = "Você tem " + contadorTarefas + " atividades"
    }
}

h6.appendChild(texto2)
root.appendChild(h6)
root.appendChild(table)
