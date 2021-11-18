const express = require("express");
const app = express();
const porta = 3000; //padrão Node.js

app.use(express.json());

const usuario = require("./rotas/usuario");
const nota = require("./rotas/nota");

app.use("/usuario", usuario);
app.use("/nota", nota);

/* app.get("/:nome", function (req, res) {
    console.log(req.params);
    const nome = req.params.nome;
    res.send("Bem vindo, " + nome);
}); */

app.listen(porta, function () {
    console.log("Aplicação rodando na porta " + porta);
});