// Seleciona os elementos do DOM
const inputTarefa = document.getElementById("inputTarefa");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");
const mensagem = document.getElementById("mensagem");

// Função para exibir mensagem
function exibirMensagem(texto, tipo) {
    mensagem.innerHTML = ""; // limpa mensagens anteriores

    const alerta = document.createElement("div"); // cria div
    alerta.className = `alert alert-${tipo} alert-dismissible fade show`; // classes Bootstrap
    alerta.setAttribute("role", "alert");

    alerta.innerHTML = `
        ${texto}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    mensagem.appendChild(alerta); // adiciona na tela
}

// Função para adicionar tarefa
function adicionarTarefa() {
    const tarefa = inputTarefa.value.trim(); // pega valor do input

    if (tarefa === "") {
        exibirMensagem("Tarefa vazia!", "danger"); // erro
        return;
    }

    // Cria o item da lista
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    // Cria o texto da tarefa
    const span = document.createElement("span");
    span.textContent = tarefa;
    li.appendChild(span);

    // Cria botão de remover
    const btnRemover = document.createElement("button");
    btnRemover.className = "btn btn-sm btn-danger";
    btnRemover.textContent = "Remover";
    li.appendChild(btnRemover);

    // Evento para remover a tarefa
    btnRemover.addEventListener("click", function() {
        li.remove(); // remove o item da lista
        exibirMensagem("Tarefa removida!", "warning"); // mensagem
    });

    // Adiciona o item na lista
    listaTarefas.appendChild(li);

    // Limpa e foca no input
    inputTarefa.value = "";
    inputTarefa.focus();

    // Mensagem de sucesso
    exibirMensagem("Tarefa adicionada com sucesso!", "success");
}

// Clique no botão
btnAdicionar.addEventListener("click", adicionarTarefa);

// Enter no input
inputTarefa.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});


/*
explicacao basica


addEventListener  adiciona eventos (clique, teclado)

trim → remove espaços no começo e no fim

textContent → define texto dentro do elemento

innerHTML → define conteúdo HTML

appendChild → adiciona um elemento dentro de outro


setAttribute → adiciona atributos ao elemento

remove → remove elemento da tela

focus → coloca o cursor no input

event.key → identifica tecla pressionada

return → interrompe a função


*/