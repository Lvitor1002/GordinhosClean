function clickMenu() {
    let menu = document.querySelector('.menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

function mudou_tamanho() {
    let menu = document.querySelector('.menu');
    if (window.innerWidth > 900) {
        menu.style.display = 'block'; // Mostra o menu automaticamente em telas grandes
    } else {
        menu.style.display = 'none'; // Oculta o menu em telas pequenas
    }
}


// Carrossel

const radio = document.querySelector(".manualBtn")
let cont = 1

document.getElementById("radio1").checked = true

setInterval(()=>{
    proximaImg()
},9000000000)

function proximaImg(){
    
    cont ++

    if(cont > 12){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true

}

window.addEventListener('scroll', function() {
    // Pega a posição de rolagem
    let scrollPosition = window.scrollY;
    
    // Acessa o elemento de fundo
    let bgElement = document.querySelector('.primeiroBackground');

    // Simula o efeito fixo no celular
    // Modifica a posição do fundo com base na rolagem
    bgElement.style.backgroundPosition = 'center ' + (scrollPosition * 0.5) + 'px';
});
