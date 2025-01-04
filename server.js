const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Middleware
app.use(express.static('public'));

// Rota básica
app.get('/', (req, res) => {
  res.send('Hello World');
});

// GET /products
app.get('/products', (req, res) => {
  res.json(products);
});

// GET /products/:id
app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((product) => product.id == id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});


// MOCK DATA

const products = [
        {
        id: 1,
        nome: 'Product 1',
        preco: 20.99,
        },
        {
        id: 2,
        nome: 'Product 2',
        preco: 20.00,
        },
        {
        id: 3,
        nome: 'Product 3',
        preco: 30.90,
        },
    ];
