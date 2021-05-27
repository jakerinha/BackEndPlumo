const express = require('express')

require('dotenv').config() //Realiza o carregamento das variaveis de ambiente

const InicializaMongoServer = require('./config/db')
InicializaMongoServer()

//Inicializamos o nosso app a partir da biblioteca express
const app = express()

//Definindo a porta DEFAULT
const PORT = process.env.PORT //PORTA 4000

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        mensagem: 'API 100% funcional',
        versao: '1.0.0'
    })
})

app.listen(PORT, (res,req) => {
    console.log(`Servidor WEB conectado na porta:${PORT}`)
})