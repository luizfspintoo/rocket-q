const express = require("express");
const route = express.Router();

//importando os controllers
const QuestionController = require("./controllers/QuestionController.js");
const  RoomController = require("./controllers/RoomController.js");

//rotas da aplicação
route.get("/", (req, res)=> res.render("index", {page:"enter-room"}));
route.get("/create-pass", (req, res)=> res.render("index", {page: "create-pass"}));

route.post("/create-room", RoomController.store);
route.get("/room/:room", RoomController.index);
route.post("/enter-room", RoomController.access);

//exemplo de rota com parametros
// route.get("/room/:room/:question/:action");

route.post("/create-question", QuestionController.store);
route.post("/questions/:room/:question/:action", QuestionController.index);

//exportando as rotas para usar no server.js
module.exports = route; 