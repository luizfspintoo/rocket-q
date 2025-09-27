const express = require("express"); 
const route = require("./routes.js");
const path = require("path");
const server = express();

//informa ao express para ativar um middleware, para receber dados via método post.
server.use(express.urlencoded({extended: true}));

//informa ao meu express que quem vai cuidar da view é o ejs
server.set("view engine", "ejs");

//informa ao express usar arquivos staticos, dentro de public
server.use(express.static("public"));

//informa ao express que o caminho das minhas views, é nesse caminho aqui: src/views
server.set("views", path.join(__dirname, "views"));

//informar ao express para usar rotas
server.use(route); 


server.listen(3000, ()=> {
    console.log("Rodando o servidor...");
});