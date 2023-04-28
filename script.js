// Início do código Javascript comentpário de uma linha

/* Primeira linha de um bloco de comentário

conteúdo

última linha do comentário */

function abrirmenu() {
    let BarraMenuAberta = document.getElementById('barra-menu');

    if (BarraMenuAberta.style.width == "0px") {
        BarraMenuAberta.style.width = "180px"
    } else {
        BarraMenuAberta.style.width = "0px"
    }
}