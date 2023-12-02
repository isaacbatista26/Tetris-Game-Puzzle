const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/app', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/src/App.js'));
});


app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});
