// Aqui serão adicionados seus scripts

document.getElementById('btnClick').onclick = function() {
    alert("Botao clicado!");
}

document.getElementById("inputText").onchange = function () {
    this.style.color = "red"
}

document.getElementById("inputText").oninput = function() {
    this.style.color = 'green'
}

document.getElementById('inputText').onkeydown = function() {
    document.getElementById('outputMessage').innerText = "Teclado Pressionado"
}

document.getElementById('inputText').onkeypress = function() {
    document.getElementById('outputMessage').innerText = "Tecla sendo pressionada"
}

document.getElementById('inputText').onkeyup = function() {
    document.getElementById('outputMessage').innerText = "Tecla liberada"
}

var box = document.getElementById('box');
box.onmouseover = function() {
    this.style.background = 'red';
}

box.onmouseout = function() {
    this.style.background = ''
}

box.ondragstart = function(event) {
    event.dataTransfer.setData("text/plain", "Drage me!");
}

box.ondragover = function(event) {
    event.preventDefault();
}

box.ondrop = function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    box.innerText = data;
}

window.onload = function() {
    alert("Pagina completamente carregada");
}