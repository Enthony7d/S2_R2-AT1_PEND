
document.getElementById("botao").addEventListener("click", function() {
    
    const nome = document.getElementById("nome").value;

   
    if (nome.trim() !== "") {
      
        document.getElementById("mensagem").textContent = `Olá, ${nome}! Seja bem-vindo(a)!`;
    } else {
        
        document.getElementById("mensagem").textContent = "Por favor, digite seu nome.";
    }
});