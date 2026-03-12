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

    
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = tarefa;

    
    listaTarefas.appendChild(li);

    
    inputTarefa.value = "";

    
    exibirMensagem("Tarefa adicionada com sucesso!", "success");

    
    inputTarefa.focus();
}


btnAdicionar.addEventListener("click", adicionarTarefa);


inputTarefa.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});