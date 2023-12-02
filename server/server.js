const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

// Servir arquivos estáticos do diretório 'build' do React
app.use(express.static(path.join(__dirname, '../client/build')));

// Rota principal que serve o arquivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Adicione outras rotas ou lógica do servidor, se necessário

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor Express está rodando na porta ${port}`);
});
