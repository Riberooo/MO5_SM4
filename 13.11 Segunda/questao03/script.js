function adicionarTarefa() {
    const tarefa = document.getElementById('tarefa').value;
    const listtarefas = document.getElementById('listaTarefas');

    const novaTarefa = document.createElement('li');
    novaTarefa.innerHTML = `
    <p>${tarefa}</p>
    <button onclick="removerTarefa(this)">Remover tarefa</button>`;

    listtarefas.appendChild(novaTarefa);
    document.getElementById('tarefaform').reset();
}

function removerTarefa(button) {
    const tarefa = button.parentNode;
    tarefa.remove();
}