var titulo = document.querySelector("#titulo")

function alteraTexto() {
    titulo.textContent = "É PASCOAAAAAAAAAAAA";
}

titulo.onclick = alteraTexto;



var mudarMensagem = document.querySelector(".flores")

function alteraMensagem() {
    mudarMensagem.textContent = "coelinho da pascoa que trazes pra mim 1 ovo, 2 ovos, 3 ovos assim"
}

mudarMensagem.onclick = alteraMensagem



var cor = document.querySelector("#botaoCor")

function mudaCor() {
    const cartao = document.querySelector(".cartao");
    cartao.style.backgroundColor = "pink";
};

cor.onclick = mudaCor



var button = document.querySelector("#botaoSurpresa")

function mostrarImagem() {
    const img = document.getElementById("imagem");
    img.style.display = "block";
};

button.onclick = mostrarImagem





