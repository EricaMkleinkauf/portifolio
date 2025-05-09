let nome1 = "";
let cidade = "";

let paragrafo = document.getElementById("lista");

fetch("./pessoas.json")
.then(response => response.json())
.then(listarPessoas =>{
    nome1 = listarPessoas.pessoas[1].nome;
    cidade = listarPessoas.pessoas[1].local.cidade;

    paragrafo.innerHTML ="primeiro registro do array contem dados do <b>\""+ nome1+ "\"</b> de <b>" + cidade + "</b>";
})

