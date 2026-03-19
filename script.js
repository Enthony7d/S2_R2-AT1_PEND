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
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
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

    const li = document.createElement("li"); // cria item
    li.className = "list-group-item";
    li.textContent = tarefa; // define texto

    listaTarefas.appendChild(li); // adiciona na lista

    inputTarefa.value = ""; // limpa input
    exibirMensagem("Tarefa adicionada com sucesso!", "success"); // sucesso
    inputTarefa.focus(); // foco no input
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


addEventListener  adiciona eventos (ex: clique, teclado)


trim  remove espaços no começo e no fim


textContent  define o texto dentro de um elemento

innerHTML  define conteúdo HTML dentro de um elemento

appendChild  adiciona um elemento dentro de outro


setAttribute  adiciona atributos ao elemento

focus  coloca o cursor no input

event.key  identifica qual tecla foi pressionada

return  interrompe a execução da função


*/