const mongoose = require ("mongoose")

const AlunoSchema = mongoose.Schema(
    {
        nomeAluno: {
            type: String,
            required: [true, "Por favor coloque um nome para o aluno"]
        },
        responsavel:{
            type: String,
            required:true
        },
        dataNascimento:{
            type:Date,
            required:true
        },
        idade:{
            type:Int16Array,
            required: true
        },
        img_url:{
            type:String,
            required:true
        }
    }
);

const Aluno = mongoose.model("Aluno", AlunoSchema);

module.exports = Aluno;