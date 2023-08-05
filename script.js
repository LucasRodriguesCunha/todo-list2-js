const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector(".list-tasks")

let minhaLista = [];

function adicionarNovaTarefa() {
    minhaLista.push(input.value);

    input.value = "";

    mostrarTarefas();
}

function mostrarTarefas() {
    let novaLista = "";

    minhaLista.forEach((tarefa) => {
        novaLista = novaLista +
    `
           <li class="task">
                <img src="imagens/checked.png" alt="check-tarefa">
                <p>${tarefa}</p>
                <img src="imagens/trash.png" alt="deletar-tarefa">
            </li>
     `
    });

    listaCompleta.innerHTML = novaLista;
       
}

button.addEventListener("click", adicionarNovaTarefa);
