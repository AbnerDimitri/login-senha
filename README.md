Alunos: 
Abner Dimitri Maciel de Oliveira 2210948
Rodrigo Secundo Araújo 2210189
Vitor Goulão Lopes 2210044
Victor Souza Silva 2211991

Servidor de login simples :

Este é um servidor básico feito com Node.js e Express que recebe um login e senha via requisição **POST** e retorna os mesmos dados.

Como executar:

1. Instale as dependências:

npm install , no terminal 

Inicie o servidor:

node server.js

Testando a API

Faça uma requisição POST para:

http://localhost:5000/login

Com o corpo JSON:

{
  "login": "usuario_teste",
  "senha": "123456"
}

Tecnologias usadas

Node.js
Express
