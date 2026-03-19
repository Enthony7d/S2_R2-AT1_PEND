// Seleciona o botão pelo ID "botao" e adiciona um evento de clique
document.getElementById("botao").addEventListener("click", function() {
    
    // Pega o valor digitado no campo de input com ID "nome"
    const nome = document.getElementById("nome").value;

    // Verifica se o campo não está vazio (remove espaços com trim)
    if (nome.trim() !== "") {
      
        // Se tiver texto, exibe uma mensagem personalizada na div "mensagem"
        document.getElementById("mensagem").textContent = `Olá, ${nome}! Seja bem-vindo(a)!`;
    
    } else {
        
        // Se estiver vazio, mostra uma mensagem pedindo para digitar o nome
        document.getElementById("mensagem").textContent = "Por favor, digite seu nome.";
    }
});