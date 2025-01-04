// recupere os IDs do carrinho do localStorage, solicite os detalhes de cada produto ao backend, e exiba-os na página.

const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

const carrinhoDiv = document.getElementById('carrinho');

carrinho.forEach(id => {
    fetch(`/products/${id}`)
        .then(response => response.json())
        .then(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.innerHTML = `
            <h2>${produto.nome}</h2>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
        `;
        carrinhoDiv.appendChild(produtoDiv);
        })
        .catch(error => console.error('Erro:', error));
    });

