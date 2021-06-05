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
        const medicoes = await Medicao.find()
        res.json(medicoes)
    }catch (err){
        res.status(500).send({
            errors: [{message: 'Nao foi possivel obter as medicoes!'}]
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

/*
DELETE /medicoes/:id
Apagar alguma medicao feita
*/

router.delete("/:id", async(req, res) => {
    await Medicao.findByIdAndRemove(req.params.id)
    .then(medicao => {res.send(
        {message: `Medida ${medicao.id} removida com sucesso!`})
    }).catch(err => {
        return res.status(500).send(
            {errors:
            [{message: `Não foi possivel apagar a medida com o id ${req.params.id}`}]
        })
    })
})



/*
PUT /medicoes/
Alterar alguma medicao feita
*/

router.put('/', async(req, res) => {
    let dados = req.body
    await Medicao.findByIdAndUpdate(req.body._id, {
        $set: dados
    }, {new: true})
    .then(medicao => {
        res.send({message: `Medida ${medicao.id} alterada com sucesso!`})
    }).catch(err => {
        return res.status(500).send({
            errors: [{
                message: `Nao foi possivel alterar a medida com o id ${req.body._id}`}]
        })
    })
})


module.exports = router