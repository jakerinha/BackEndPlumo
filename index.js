const express = require('express')

require('dotenv').config() //Realiza o carregamento das variaveis de ambiente

const rotaMedicoes = require('./routes/Medicoes')

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

app.use(function(req, res, next){
    //Em produção, remova o * e atualize com o domínio/ip do seu app
    res.setHeader('Access-Control-Allow-Origin', '*')
    //Cabeçalhos que serão permitidos
    res.setHeader('Access-Control-Allow-Headers','*')
    //Ex: res.setHeader('Access-Control-Allow-Headers','Content-Type, Accept, access-token'  
    //Métodos que serão permitidos
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH') 
    next()
   })


//Rota para mediçoes

app.use('/medicoes', rotaMedicoes)

app.listen(PORT, (res,req) => {
    console.log(`Servidor WEB conectado na porta:${PORT}`)
})