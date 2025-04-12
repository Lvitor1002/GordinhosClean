const formulario = document.getElementById("conteudoFormulario")

formulario.addEventListener("submit",function(evento){

    evento.preventDefault(); // evita o envio do formulário até a validação passar

    let formularioValido = true 

    const nome = formulario.elements["nome"].value.trim(); 
    const email = formulario.elements["email"].value.trim(); 
    const mensagem = formulario.elements["mensagem"].value.trim(); 
    
    const campoNome = formulario.elements["nome"]; 
    const campoEmail = formulario.elements["email"]; 
    const campoMensagem = formulario.elements["mensagem"]; 

    campoNome.style.border = ""
    campoEmail.style.border = ""
    campoMensagem.style.border = ""

    if (nome === "" || !/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) {

        formularioValido = false;

        alert("Por gentileza, digite um nome válido (somente letras).");
        campoNome.style.border = "2px solid red"
    }
    
    if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        
        formularioValido = false;
    
        alert("Por gentileza, digite um email válido.\nExemplo: usuario@dominio.com");
        campoEmail.style.border = "2px solid red";
    }
    

    if (mensagem === "") {

        formularioValido = false;

        alert("Por gentileza, escreva sua mensagem.");
        campoMensagem.style.border = "2px solid red"
    }

    if (formularioValido) {
        alert("Mensagem enviada com sucesso.")
        formulario.submit(); // envia se tudo estiver certo
    }

    
    fetch("https://formsubmit.co/ajax/luizpierino@hotmail.com",{
        method: "POST",
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify({'Nome do cliente': formulario.nome.value,
                              'Email do Cliente': formulario.email.value,
                              'Mensagem do cliente': formulario.mensagem.value})
    
    })
        .then(response => response.json())
        .then(data=> {
            if(data.success){
                formularioValido = true
            }else{
                formularioValido = false
                throw "Erro inesperado ao enviar formulário à API - " + data.message
            }
        })
        .catch(error => {
            alert(error)
        })
})

