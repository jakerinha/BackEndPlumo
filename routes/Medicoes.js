//API REST das Mediçoes

const express = require('express')
const router = express.Router()

const Medicao = require('../model/Medicoes')

/*
GET /medicoes/
Listar todas as medicoes
*/

router.get("/", async(req, res) =>{
    try{

    }catch (err){
        res.status(500).send({
            errors: [{message: 'Nao foi possivel obter as categorias!'}]
        })
    }
})

/*
POST /medicoes/
Inclui uma nova medicao
*/

router.post('/', async(req, res) => {
    try{
        let medicao = new Medicao(req.body)
        await medicao.save()
        res.send(medicao)

    }catch (err){
        return res.status(500).json({
            errors: [{message: `Erro ao salvar a medicao: ${err.message}`}]
        })
    }
})


module.exports = router