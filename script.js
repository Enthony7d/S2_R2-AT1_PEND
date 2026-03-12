// Seleciona os elementos do DOM
const inputTarefa = document.getElementById("inputTarefa");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");
const mensagem = document.getElementById("mensagem");


function exibirMensagem(texto, tipo) {
    
    mensagem.innerHTML = "";

    
    const alerta = document.createElement("div");
    alerta.className = `alert alert-${tipo} alert-dismissible fade show`;
    alerta.setAttribute("role", "alert");
    alerta.innerHTML = `
        ${texto}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    mensagem.appendChild(alerta);
}


function adicionarTarefa() {
    const tarefa = inputTarefa.value.trim();

    if (tarefa === "") {
        exibirMensagem("Tarefa vazia!", "danger");
        return;
    }

    // Criar elemento <li> com Bootstrap
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    
    const span = document.createElement("span");
    span.textContent = tarefa;
    li.appendChild(span);

    
    const btnRemover = document.createElement("button");
    btnRemover.className = "btn btn-sm btn-danger";
    btnRemover.textContent = "Remover";
    li.appendChild(btnRemover);

    
    btnRemover.addEventListener("click", function() {
        li.remove();
        exibirMensagem("Tarefa removida!", "warning");
    });

    
    listaTarefas.appendChild(li);

    
    inputTarefa.value = "";
    inputTarefa.focus();

    
    exibirMensagem("Tarefa adicionada com sucesso!", "success");
}


btnAdicionar.addEventListener("click", adicionarTarefa);


inputTarefa.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});