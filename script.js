const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector(".list-tasks")

let minhaLista = [];

function adicionarNovaTarefa() {
    minhaLista.push({
        tarefa: input.value,
        concluida: false
    });

    input.value = "";

    mostrarTarefas();
}

function mostrarTarefas() {
    let novaLista = "";

    minhaLista.forEach((item, posicao) => {
        novaLista = novaLista +
            `
           <li class="task ${item.concluida && "done"}">
                <img src="imagens/checked.png" alt="check-tarefa" onclick="concluirTarefa(${posicao})">
                <p>${item.tarefa}</p>
                <img src="imagens/trash.png" alt="deletar-tarefa" onclick="deletarItem(${posicao})">
            </li>
     `
    });

    listaCompleta.innerHTML = novaLista;

    localStorage.setItem("Lista de tarefas", JSON.stringify(minhaLista))

}

function concluirTarefa(posicao) {
    minhaLista[posicao].concluida = !minhaLista[posicao].concluida;

    mostrarTarefas();
}

function deletarItem(posicao) {
    minhaLista.splice(posicao, 1);

    mostrarTarefas();
}

function recarregarTarefas() {
    const tarefasLocalStorage = localStorage.getItem("Lista de tarefas");


    if (tarefasLocalStorage) {
        minhaLista = JSON.parse(tarefasLocalStorage);
    }

    mostrarTarefas();
}

recarregarTarefas();
button.addEventListener("click", adicionarNovaTarefa);
