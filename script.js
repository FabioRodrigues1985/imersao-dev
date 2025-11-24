let cardContainer = document.querySelector(".card-container");
let inputBusca = document.querySelector("#input-busca");
let dados = [];

window.onload = async () => {
    await carregarDados();
    renderizarCards(dados);
};

async function carregarDados() {
    const resposta = await fetch("data.json");
    dados = await resposta.json();
}

async function iniciarBusca() {
    const termoBusca = inputBusca.value.toLowerCase();
    const dadosFiltrados = dados.filter(dado => dado.nome.toLowerCase().includes(termoBusca) || dado.descrição.toLowerCase().includes(termoBusca));
    renderizarCards(dadosFiltrados);
}

function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa o container para não duplicar os cards
    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
            <h2>${dado.nome}</h2>
            <p>${dado.data_criacao}</p>
            <p>${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Saiba mais</a>
        `;
        cardContainer.appendChild(article);
    }
}
