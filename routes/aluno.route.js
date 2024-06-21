const express = require("express");
const rota = express.Router();
const {lerAlunos, lerAluno, cadastrarAluno, atualizarAluno, excluirAluno} = require("../controllers/Alunos.controller.js")


//mostrar todos os Alunos
rota.get("/",lerAlunos);

//mostrar um Aluno especifico a partir do seu id 
rota.get("/:id",lerAluno);

//Cadastrar um Aluno
rota.post("/",cadastrarAluno);

//Atualizar um Aluno
rota.put("/:id",atualizarAluno);

//Excluir um Aluno
rota.delete("/:id",excluirAluno);


module.exports = rota;