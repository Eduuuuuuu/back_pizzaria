/***************************************************************************************************************************************
 * Objetivo: Completar o Back-End da pizzaria.
 * Data: 13/12/2023
 * Nome: Eduardo Vilas Boas de Barros
 * Versão: 1.0.0
 */

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use((request, response, next) => {

    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())

    next()

})

app.get('/comentarios/:idProduto', cors(), async function(request, response, next) {

    let controleComentarios = require('./module/completando_a_pizza')
    let id = request.params.idProduto
    let listaComentarios = controleComentarios.getComentarios(id)

    if(listaComentarios) {
        response.json(listaComentarios)
        response.status(200)
    }else {
        response.status(404)
    }

})

app.get('/usuarios', cors(), async function(request, response, next) {

    let controleUsuario = require('./module/completando_a_pizza.js')
    let email = request.query.email
    let senha = request.query.senha
    let listaUsuario = controleUsuario.getUsuarios(email, senha)

    if(listaUsuario) {
        response.json(listaUsuario)
        response.status(200)
    }else {
        response.status(404)
    }

})

app.get('/info/:idInfoPerfil', cors(), async function(request, response, next) {

    let controleUsuario = require('./module/completando_a_pizza.js')
    let id = request.params.idInfoUsuario
    let listaUsuario = controleUsuario.getListarUsuario(id)

    if(listaUsuario) {
        response.json(listaUsuario)
        response.status(200)
    }else {
        response.status(404)
    }

})

app.get('/produto/:idInfoProduto', cors(), async function(request, response, next) {

    let controleProduto = require('./module/completando_a_pizza.js')
    let id = request.params.idInfoProduto
    let listaUsuario = controleProduto.getListarProdutos(id)

    if(listaUsuario) {
        response.json(listaUsuario)
        response.status(200)
    }else {
        response.status(404)
    }

})

app.listen('8080', function() {
    console.log('API funcionando!!')
})