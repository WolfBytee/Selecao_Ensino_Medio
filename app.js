const express = require("express")
const app = express()

const {engine} = require('express-handlebars')
app.engine('handlebars', engine({defaultLayout: 'main', extname: '.handlebars'})) //configurando handlebars
app.set('view engine', 'handlebars')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const inscrito = require("./models/InsercaoInscricao")

//-----------ROTAS------------------

app.use(express.static('stylesheets'))

app.get('/', function(req, res){
    res.render("index")
})

app.get('/inscricoes', function(req, res){
    res.render("inscricoes", {layout: "form"})
})

app.post('/inscricoes', function(req, res){
    inscrito.create({
        nome: req.body.nome,
        data_nasc: req.body.data_nasc,
        email: req.body.email,
        CPF: req.body.CPF,
        curso_id: req.body.curso_id 
    }).then(function(){
        res.render("mensagem", {
            layout: "msg",
            titulo: "Inscrição Realizada!",
            mensagem: "Você está inscrito, " + req.body.nome + "!"
        })
    }).catch(function(erro){
        res.render("mensagem", {
            layout: "msg",
            titulo: "Erro",
            mensagem: "Houve um erro ao salvar os dados: " + erro
        })
    })
})

//----------------------------------

app.listen(8081, function(){
    console.log("Servidor operando em: http://localhost:8081/")
})