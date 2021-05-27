const mongoose = require('mongoose')
//Criando o schema para Medições

const MedicoesSchema = mongoose.Schema({
    medidas: {
        medidaX: {type: Number},
        medidaY: {type: Number}
    },
    dataMedicao: {type: Date},
    nomeCliente: {type: String},
    localMedida: {type: String}
}, {timestamps:true})

module.exports = mongoose.model('medicoes', MedicoesSchema)