// Seleciona os elementos do DOM
const inputTarefa = document.getElementById("inputTarefa");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");
const mensagem = document.getElementById("mensagem");

// Função para exibir mensagens Bootstrap
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

// Função para adicionar tarefa
function adicionarTarefa() {
    const tarefa = inputTarefa.value.trim();

    if (tarefa === "") {
        exibirMensagem("Tarefa vazia!", "danger");
        return;
    }

    // Criar <li> com Bootstrap e estilo flex
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    // Div para organizar checkbox + texto
    const divTexto = document.createElement("div");
    divTexto.className = "form-check";

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input me-2";

    // Label do texto da tarefa
    const label = document.createElement("label");
    label.className = "form-check-label";
    label.textContent = tarefa;

    divTexto.appendChild(checkbox);
    divTexto.appendChild(label);

    li.appendChild(divTexto);

    // Botão remover
    const btnRemover = document.createElement("button");
    btnRemover.className = "btn btn-sm btn-danger";
    btnRemover.textContent = "Remover";
    li.appendChild(btnRemover);

    // Evento para marcar tarefa como concluída
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            label.style.textDecoration = "line-through";
            label.style.color = "#6c757d"; // cinza
        } else {
            label.style.textDecoration = "none";
            label.style.color = "inherit";
        }
    });

    // Evento para remover tarefa
    btnRemover.addEventListener("click", function() {
        li.remove();
        exibirMensagem("Tarefa removida!", "warning");
    });

    // Adiciona à lista
    listaTarefas.appendChild(li);

    // Limpa input e foca
    inputTarefa.value = "";
    inputTarefa.focus();

    // Mensagem de sucesso
    exibirMensagem("Tarefa adicionada com sucesso!", "success");
}

// Eventos
btnAdicionar.addEventListener("click", adicionarTarefa);

inputTarefa.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});