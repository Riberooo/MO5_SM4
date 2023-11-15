// Aqui serão adicionados seus scripts
const principal = document.getElementById("noticia-principal");
// alert(principal.innerHTML);

const titulos = document.getElementsByTagName("h1");
for (const titulo of titulos) {
    titulo.style.color = "pink";
}

const paragrafos = document.getElementsByClassName("paragrafo-noticia");
for (const paragrafro of paragrafos) {
    paragrafro.innerHTML = "Leia a noticia completa";
}

const comentarios = document.getElementById("secao-comentarios");
const novocomentario = document.createElement("p");
novocomentario.innerHTML = "Deixe seu comentario";
comentarios.appendChild(novocomentario);

const atualizacao = document.getElementById("ultimas-atualizacoes");
const ultimoitem = atualizacao.lastElementChild;
atualizacao.removeChild(ultimoitem);