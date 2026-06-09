function enviarAlerta() {
    var problema = document.getElementById("inputProblema").value;
    if (problema === "") {
        alert("Por favor, descreva o problema antes de enviar.");
    } else {
        alert("Alerta enviado com sucesso! O setor responsável foi notificado.");
        document.getElementById("inputProblema").value = "";
    }
}

function apoiar() {
    alert("Obrigado pelo seu apoio! Você ganhou 50 Eco-Créditos.");
}

function enviarMensagem() {
    var nome = document.getElementById("nome").value;
    if (nome === "") {
        alert("Por favor, preencha seu nome.");
    } else {
        alert("Olá " + nome + ", sua mensagem foi enviada com sucesso! Entraremos em contato em breve.");
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mensagem").value = "";
    }
}
