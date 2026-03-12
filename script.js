// Seleciona o botão de adicionar
const addBtn = document.getElementById("addBtn");

// Adiciona evento de clique
addBtn.addEventListener("click", function() {
    const input = document.getElementById("itemInput");
    const texto = input.value.trim();

    if(texto !== ""){
        const li = document.createElement("li");
        li.textContent = texto;

        document.getElementById("lista").appendChild(li);

        input.value = ""; // limpa o input
        input.focus();    // mantém o foco
    }
});