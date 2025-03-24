const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 1313;
const host = 'jogo'; // Forçar o endereço

// Servir os arquivos da pasta do jogo
app.use(express.static(path.join(__dirname)));

// Rota principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, host,() => {
  console.log(`🔥 Servidor rodando em http://${host}:${port}`);
});
