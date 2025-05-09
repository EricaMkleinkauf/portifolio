// Seleciona os elementos do HTML usados no script
let imgPokemon = document.querySelector("#fotopokemon"); // imagem do Pokémon
let formPoke = document.querySelector("#form"); // formulário de busca
let inputF = document.querySelector("#input"); // input para nome/id
let idPoke = document.querySelector("#idpokemon"); // mostra o ID do Pokémon
let nomePoke = document.querySelector("#nomepokemon"); // mostra o nome do Pokémon
let tipo1poke = document.querySelector("#tipo1"); // mostra o tipo 1
let tipo2poke = document.querySelector("#tipo2"); // mostra o tipo 2
let habilidade = document.querySelector("#habilidade"); // mostra a habilidade
let peso = document.querySelector("#peso"); // mostra o peso
let altura = document.querySelector("#altura"); // mostra a altura
let back = document.querySelector("#btnvoltar"); // botão de voltar
let next = document.querySelector("#btnproximo"); // botão de próximo
let audio1 = document.querySelector("#audio1"); // áudio do Pokémon
let audio = document.getElementById("pokemonAudio"); // áudio geral/manual
let numeroPokedex = 1; // controla o número do Pokémon atual

// Função que busca os dados do Pokémon pela API
const fecthPokemon = async (pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;
}

// Função que mostra os dados do Pokémon na tela
const mostraPokemon = async (pokemon) => {
    const dataPokemon = await fecthPokemon(pokemon);
    segundaImagem(dataPokemon.sprites.other.showdown.front_default, dataPokemon.sprites.front_default); // imagem animada
    nomePoke.innerHTML = dataPokemon.name; // nome
    idPoke.innerHTML = + dataPokemon.id; // ID
    tipo1poke.innerHTML = "tipo 1: " + dataPokemon.types[0].type.name; // tipo 1
    tipo2poke.innerHTML = "tipo 2: " + dataPokemon.types[1].type.name; // tipo 2
    habilidade.innerHTML = "Habilidade: " + dataPokemon.abilities[0].ability.name; // primeira habilidade
    altura.innerHTML = "Altura:" + (dataPokemon.height / 10); // altura em metros
    peso.innerHTML = "Peso: " + (dataPokemon.weight); // peso 
    audio1.src = dataPokemon.cries.latest; // som do Pokémon
    audio1.play(); // toca o som automaticamente
}

// Quando o formulário é enviado, busca o Pokémon digitado
formPoke.addEventListener("submit", (event) => {
    event.preventDefault(); // evita recarregar a página
    mostraPokemon(inputF.value.toLowerCase()); // mostra o Pokémon buscado
})

// Botão "voltar" mostra o Pokémon anterior
back.addEventListener("click", event => {
    if (numeroPokedex > 1) {
        numeroPokedex = numeroPokedex - 1;
    }
    mostraPokemon(numeroPokedex);
})

function segundaImagem(gif, image) {
    imgPokemon.src = gif;

    imgPokemon.onerror = function () {
        this.onerror = null;
        this.src = image;
    };
    return;
};

// Botão "próximo" mostra o próximo Pokémon
next.addEventListener("click", event => {
    if (numeroPokedex < 1000) {
        numeroPokedex = numeroPokedex + 1;
    }
    mostraPokemon(numeroPokedex);
})

// Funções para controlar o áudio da intro
function playAudio() {
    audio.play();
}
function pauseAudio() {
    audio.pause();
}

// Mostra o primeiro Pokémon ao carregar a página
mostraPokemon(numeroPokedex);
