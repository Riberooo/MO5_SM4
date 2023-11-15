function esconderfoto() {
    const divFoto = document.getElementById("foto");
    if (divFoto.style.visibility == 'hidden') {
        divFoto.style.visibility = 'visible';
    } else {
        divFoto.style.visibility = 'hidden';
    }
}

function alterarformat() {
    const divTexto = document.getElementById("sobre");
    const input = document.getElementById("format");
    divTexto.style.textAlign = input.value;
}

function alteracor() {
    const DivFooter = document.getElementById("footer");
    const divheader = document.getElementById("header");
    const input = document.getElementById("cor");
    DivFooter.style.backgroundColor = input.value;
    divheader.style.backgroundColor = input.value
    if (DivFooter.style.backgroundColor == 'white') {
        DivFooter.style.color = 'black'
        divheader.style.color = 'black'
    }
    if (DivFooter.style.backgroundColor == 'black') {
        DivFooter.style.color = 'white'
        divheader.style.color = 'white'
    }

}

function alterarfont () {
    const divTexto = document.getElementById("sobre");
    const input = document.getElementById("font");
    divTexto.style.fontFamily = input.value;

}

function mudartema () {
    const divTexto = document.getElementById("conteudo");
    if (divTexto.style.background === 'black' && divTexto.style.color === 'white') {
        divTexto.style.background = ''; 
        divTexto.style.color = '';
    } else {
        divTexto.style.background = 'black';
        divTexto.style.color = 'white';
    }

}