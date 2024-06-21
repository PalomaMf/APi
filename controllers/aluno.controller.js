const Aluno = require("../models/Aluno.model.js");

const lerAlunos = async (req,res) =>{
    try{
        const Alunos = await Aluno.find();
        res.status(200).json(Alunos)
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
};

const lerAluno = async (req,res) => {
    try{
        const { id } = req.params;
        const Alunos = await Aluno.findById(id);
        res.status(200).json(Alunos)
    }
    catch (error){
        res.status(500).json({ message: error.message });
    }
};

const cadastrarAluno = async (req,res) => {
    try{
        const Alunos = await Aluno.create(req.body);
        res.status(200).json(Alunos)
    }
    catch (error){
        res.status(500).json({ message: error.message });
    }
};

const atualizarAluno = async (req,res) => {
    try{
        const { id } = req.params;
        const Aluno = await Aluno.findByIdAndUpdate(id,req.body);
        
        const AlunoAtualizado = await Aluno.findById(id);
        res.status(200).json(AlunoAtualizado);
    }
    catch (error){
        res.status(500).json({ message: error.message });
    }
};

const excluirAluno = async (req,res) => {
    try{
        const { id } = req.params;
        await Aluno.findByIdAndDelete(id,req.body);
        res.status(200).json({ message: "Aluno excluído com sucesso" });
    }
    catch (error){
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    lerAlunos,
    lerAluno,
    cadastrarAluno,
    atualizarAluno,
    excluirAluno,
};