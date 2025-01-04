fetch('/products')
  .then(response => response.json())
  .then(produtos => {
    const produtosDiv = document.getElementById('produtos');
    produtos.forEach(produto => {
      const produtoDiv = document.createElement('div');
      produtoDiv.innerHTML = `
        <h2>${produto.nome}</h2>
        <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
        <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
        <a href="/produto.html?id=${produto.id}">Ver detalhes</a>
      `;
      produtosDiv.appendChild(produtoDiv);
    });
  })
  .catch(error => console.error('Erro:', error));


  function adicionarAoCarrinho(id) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(id);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert('Produto adicionado ao carrinho!');
  }