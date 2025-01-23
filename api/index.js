const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());


app.get('/api', (req, res) => {
  res.json({ message: 'Olá, mundos!' });
});

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
});
