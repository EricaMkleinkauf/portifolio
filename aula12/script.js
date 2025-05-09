alert("Bem vindos")

let titulo = document.querySelector("#titulo");
titulo.textContent = "hello world";
titulo.style.color = "red";

function mostraAlerta() {
    alert("Funciona!")
}

function mostraTexto(texto) {
    alert(texto)
}

titulo.onclick = mostraTexto("Feliz Pascoa");


