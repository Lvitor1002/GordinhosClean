const formulario = document.getElementById("conteudoFormulario")

formulario.addEventListener("submit",function(evento){

    evento.preventDefault(); // evita o envio do formulário até a validação passar

    let formularioValido = true 

    const nome = formulario.elements["nome"].value.trim(); 
    const mensagem = formulario.elements["mensagem"].value.trim(); 
    
    const campoNome = formulario.elements["nome"]; 
    const campoMensagem = formulario.elements["mensagem"]; 

    campoNome.style.border = ""
    campoMensagem.style.border = ""

    if (nome === "" || !/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) {
        formularioValido = false;
        alert("Por gentileza, digite um nome válido (somente letras).");
        campoNome.style.border = "2px solid red"
    }

    if (mensagem === "") {
        formularioValido = false;
        alert("Por gentileza, escreva sua mensagem.");
        campoMensagem.style.border = "2px solid red"
    }

    if (formularioValido) {
        
        formulario.submit(); // envia se tudo estiver certo
    }
});