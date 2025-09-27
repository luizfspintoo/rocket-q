const express = require("express");
const route = express.Router();

//importando os controllers
const QuestionController = require("./controllers/QuestionController.js");
const  RoomController = require("./controllers/RoomController.js");

route.get("/", (req, res)=> res.render("index", {page:"enter-room"}));
route.get("/create-pass", (req, res)=> res.render("index", {page: "create-pass"}));
route.get("/room/:room", (req, res)=> res.render("room"));

//exemplo de rota com parametros
// route.get("/room/:room/:question/:action");

route.post("/questions/:room/:question/:action", QuestionController.index);
route.post("/create-room", RoomController.store);

//exportando as rotas para usar no server.js
module.exports = route; 