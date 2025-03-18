// Array para armazenar os amigos de viktinho
let amigos = [];

// Espera o DOM carregar para associar eventos aos botões e ao campo de entrada
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".button-add").addEventListener("click", adicionarAmigo);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
    document.getElementById("amigo").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            adicionarAmigo();
        }
    });
});

// Função para adicionar amigos
function adicionarAmigo() {
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    inputNome.value = ""; // Limpa o campo após adicionar
}

// Função para atualizar a lista na interface
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa antes de atualizar

    amigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 3) {
        alert("Você precisa adicionar pelo menos 3 amigos antes de sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    let resultadoLista = document.getElementById("resultado");
        resultadoLista.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
    }
