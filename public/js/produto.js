const params = new URLSearchParams(window.location.search);
const id = params.get('id');

fetch(`/produtos/${id}`)
  .then(response => response.json())
  .then(produto => {
    const produtoDiv = document.getElementById('produto');
    produtoDiv.innerHTML = `
      <h1>${produto.nome}</h1>
      <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
      <p>Descrição: Produto de alta qualidade.</p>
      <button>Adicionar ao Carrinho</button>
    `;
  })
  .catch(error => console.error('Erro:', error));