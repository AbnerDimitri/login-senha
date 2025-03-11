const express = require('express');
const path = require('path');
const app = express();

// Middleware para servir arquivos estáticos (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para analisar o corpo da requisição em JSON
app.use(express.json());

// Rota para servir a página de login (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota POST para receber login e senha
app.post('/login', (req, res) => {
    const { login, senha } = req.body;

    // Retorna os dados de login e senha como resposta
    return res.json({
        login: login,
        senha: senha
    });
});

// Inicia o servidor na porta 5000
app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
});
