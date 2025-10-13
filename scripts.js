let imagem = document.querySelector(".imagem-copo");
let fundo = document.querySelector(".circulo");

function trocaImagem(endereco) {
    imagem.src = endereco;
}

function trocaFundo(cor) {
    fundo.style.background = cor;
}

// ====== EFEITO DE TRANSIÇÃO ENTRE PÁGINAS ======
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.remove("fade-out");
});

function mudarPaginaComTransicao(url) {
    document.body.classList.add("fade-out");
    setTimeout(() => {
        window.location.href = url;
    }, 500); // tempo igual ao transition no CSS
}
