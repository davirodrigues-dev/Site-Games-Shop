const listaProdutos = [
    {
        id: 1,
        nome: "Dark Souls",
        preco: 25.00,
        imagem: "./imagem/darksouls.png",
        categoria: "PlayStation"
    },
    {
        id: 2,
        nome: "God of War",
        preco: 20.00,
        imagem: "./imagem/godofwar.png",
        categoria: "PlayStation"
    },
    {
        id: 3,
        nome: "Spider-man",
        preco: 23.99,
        imagem: "./imagem/spiderman.png",
        categoria: "PlayStation"
    },
    {
        id: 4,
        nome: "Tomb Raider",
        preco: 22.99,
        imagem: "./imagem/tombraider.png",
        categoria: "Xbox"
    },
    {
        id: 5,
        nome: "Crash Bandicoot",
        preco: 21.99,
        imagem: "./imagem/crashbandicoot.png",
        categoria: "Xbox"
    }
];

function exibirProdutos(produtos) {
    const catalogoProdutos = document.getElementById('catalogoProdutos');
    if (!catalogoProdutos) {
        console.error("Elemento com ID 'catalogoProdutos' não encontrado.");
        return;
    }

    catalogoProdutos.innerHTML = ''; 

    produtos.forEach(produto => {
        const productCard = `
            <div class="w-[300px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)] rounded-xl overflow-hidden transition-all duration-300 flex flex-col uppercase categoria-${produto.categoria}">
                <img src="${produto.imagem}" alt="imagem ${produto.nome}" class="w-full h-[350px] object-cover">
                <h3 class="px-5 mt-4 mb-3 text-lg">${produto.nome}</h3>
                <p class="px-5 font-bold text-xl mb-3">R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
                <a class="flex justify-center items-center m-5 p-4 w-[160px] mx-auto bg-[#4775f5] text-white font-bold no-underline rounded-[15px] shadow-[0_0_8px_rgba(90,94,230,0.8)] hover:bg-[#09236b] transition-colors" href="https://wa.me/+5585999999999"><i class="fas fa-shopping-cart mr-2"></i> Comprar</a>
            </div>
        `;
        catalogoProdutos.innerHTML += productCard;
    });
}

function filtrarProdutos(categoria) {
    let produtosFiltrados = [];
    if (categoria === 'Todos') {
        produtosFiltrados = listaProdutos;
    } else {
        produtosFiltrados = listaProdutos.filter(produto => produto.categoria === categoria);
    }
    exibirProdutos(produtosFiltrados);
}

document.addEventListener('DOMContentLoaded', () => {
    exibirProdutos(listaProdutos);

    const botaoTodos = document.getElementById('filtrarTodos');
    const botaoPlayStation = document.getElementById('filtrarPlayStation');
    const botaoXbox = document.getElementById('filtrarXbox');

    if (botaoTodos) {
        botaoTodos.addEventListener('click', () => filtrarProdutos('Todos'));
    }
    if (botaoPlayStation) {
        botaoPlayStation.addEventListener('click', () => filtrarProdutos('PlayStation'));
    }
    if (botaoXbox) {
        botaoXbox.addEventListener('click', () => filtrarProdutos('Xbox'));
    }
});
