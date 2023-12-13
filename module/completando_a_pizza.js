const igredientesPizzaria = require('./igredientes_da_pizza')

const getListaDeUsuarios = function() {
    let arrayUsuarios = []
    let contador = 0
    let status = true

    while (contador < igredientesPizzaria.usuarios.length) {

        arrayUsuarios.push(igredientesPizzaria.usuarios[contador].nome)
        contador++
        status = true

    }

    if (status)
        return arrayUsuarios
    else
        return false
}

const getListarProdutos = function() {
    let arrayProdutos = []
    let contador = 0
    let status = true

    while (contador < igredientesPizzaria.produtos.length) {

        arrayProdutos.push(igredientesPizzaria.produtos[contador].nome)
        contador++
        status = true

    }

    if (status)
        return arrayProdutos
    else
        return false
}

module.exports = {getListaDeUsuarios}
module.exports = {getListarProdutos}