# Meu E-commerce Básico

Bem-vindo ao **Meu E-commerce Básico**! Este é um projeto simples que simula um sistema de e-commerce, permitindo que os usuários visualizem produtos, vejam detalhes e adicionem itens ao carrinho de compras.

## 🚀 Features

- **Listagem de Produtos**: Exibe uma lista de produtos disponíveis.
- **Detalhes do Produto**: Permite visualizar informações detalhadas de cada produto.
- **Carrinho de Compras**: Simula a adição de produtos ao carrinho (usando `localStorage`).
- **Backend Simples**: APIs RESTful para obter produtos, desenvolvidas com Node.js e Express.js.
- **Frontend Simples**: Interface de usuário construída com HTML, CSS e JavaScript puro.

## 🛠️ Tecnologias Utilizadas

- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript ES6+

- **Backend**:
  - Node.js
  - Express.js

- **Outras Ferramentas**:
  - npm
  - [Visual Studio Code](https://code.visualstudio.com/)

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- **Node.js** (versão 12 ou superior)
  - Você pode baixar e instalar a partir do site oficial: [Node.js Downloads](https://nodejs.org/)

- **npm** (normalmente instalado junto com o Node.js)

## 📦 Instalação

Siga estes passos para configurar o projeto localmente:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/meu-ecommerce-basico.git
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   cd meu-ecommerce-basico
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

## 🚀 Executando a Aplicação

Após a instalação, você pode executar o servidor e acessar o e-commerce no navegador.

1. **Inicie o servidor:**

   ```bash
   node server.js
   ```

   O servidor estará rodando em `http://localhost:3000`.

2. **Abra o navegador e acesse:**

   ```
   http://localhost:3000
   ```

   Você verá a página inicial com a lista de produtos.

## 📁 Estrutura do Projeto

```
meu-ecommerce-basico/
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── scripts.js
│   │   ├── produto.js
│   │   └── carrinho.js
│   ├── index.html
│   ├── produto.html
│   └── carrinho.html
├── server.js
├── package.json
├── .gitignore
└── README.md
```

- **server.js**: Configuração do servidor Node.js com Express.js.
- **public/**: Arquivos estáticos do frontend (HTML, CSS, JS).
- **public/css/**: Arquivos de estilo.
- **public/js/**: Scripts JavaScript do frontend.
- **public/index.html**: Página inicial com a listagem de produtos.
- **public/produto.html**: Página de detalhes de um produto.
- **public/carrinho.html**: Página do carrinho de compras.

## 📝 Funcionalidades

### 1. Listagem de Produtos

- Acesse a página inicial para ver todos os produtos disponíveis.
- Os produtos são obtidos via API do backend (`/produtos`).

### 2. Detalhes do Produto

- Clique em "Ver detalhes" para ver informações adicionais de um produto.
- A página de detalhes faz uma requisição à API (`/produtos/:id`).

### 3. Adicionar ao Carrinho

- Nos produtos, clique em "Adicionar ao Carrinho" para simular a adição ao carrinho.
- Os itens adicionados são armazenados no `localStorage` do navegador.

### 4. Visualizar Carrinho

- Acesse a página do carrinho (`/carrinho.html`) para ver os produtos adicionados.
- É possível visualizar os itens e o total simulado da compra.

## 🔧 Personalização

Você pode personalizar e expandir este projeto conforme desejar:

- **Adicionar mais produtos**: Modifique o array `produtos` no `server.js` para adicionar ou remover itens.
- **Melhorar o Frontend**: Aplique seus próprios estilos e layouts no CSS.
- **Implementar um Banco de Dados**: Substitua o array por um banco de dados real, como MongoDB ou PostgreSQL.

## 📚 Próximos Passos

- **Autenticação de Usuários**: Implemente login e gerenciamento de usuários.
- **Persistência de Dados**: Use um banco de dados para armazenar produtos e informações do carrinho.
- **Processo de Checkout**: Simule um processo de compra completo.
- **Melhorias no Carrinho**: Permita alterar quantidades, remover itens, etc.
- **Utilizar Frameworks Frontend**: Integrar React, Vue ou Angular para um frontend mais robusto.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## 📝 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

Se tiver alguma dúvida ou sugestão:

- **Email**: iagommendes@gmail.com
- **GitHub**: [seu-usuario](https://github.com/iagommendes)

--
