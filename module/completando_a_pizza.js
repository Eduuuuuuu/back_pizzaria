const { usuarios, produtos } = require("./igredientes_da_pizza")

const getUsuarios = function(email, senha) {

    let JSONUsuario = {};
    let status = false;

    for(let contador = 0; contador < usuarios.user.length; contador++) {

        if(email === usuarios.user[contador].email && senha === usuarios.user[contador].senha) {

            JSONUsuario.Email = usuarios.user[contador].email
            JSONUsuario.Senha = usuarios.user[contador].senha
            status = true

        }
    }

    if(!status) {
        console.log('Informações Inválidas!');
    }

    return JSONUsuario

}

const getListarUsuario = function(id) {

    let JSONUsuario = {};
    let ArrayUsuario = [];
    let status = false;

    for(let cont = 0; cont < usuarios.user.length; cont++) {

        if(id === usuarios.user[cont].id) {

            JSONUsuario.Email = usuarios.user[cont].email
            JSONUsuario.Telefone = usuarios.user[cont].telefone

            usuarios.user[cont].endereco.forEach(endereco => {

                let json = {

                    logradouro: endereco.logradouro,
                    bairro: endereco.bairro,
                    cidade: endereco.cidade,
                    cep: endereco.cep,
                    numero: endereco.numero

                }

                ArrayUsuario.push(json)
                status = true

            });
        }
    } 

    JSONUsuario.endereco = ArrayUsuario

    if(!status) {
        console.log('Informações Inválidas!');

    }

    return JSONUsuario

}

const getComentarios = function(id) {

    let JSONProdutos = {};
    let ArrayProdutos = [];
    let status = false;

    for(let cont = 0; cont < produtos.categoria.length; cont++) {

        if(id === produtos.categoria[cont].id) {
            
            produtos.categoria[cont].comentarios.forEach(comentario => {

                let json = {

                  id: comentario.id,
                  avaliacao: comentario.avaliacao,
                  comentario: comentario.comentario

                }

                status = true
                ArrayProdutos.push(json) 

            })
        }
    }
    
    JSONProdutos.comentarios = ArrayProdutos

    if(status) {
        return JSONProdutos
    }else {
        return false
    }

}

const getListarProdutos = function(id){

    let JSONProdutos = {};
    let status = false;

    for(let cont = 0; cont < produtos.categoria.length; cont++) {

        if(id === produtos.categoria[cont].id) {

            JSONProdutos.nome = produtos.categoria[cont].nome
            JSONProdutos.preco = produtos.categoria[cont].preco
            JSONProdutos.descricao = produtos.categoria[cont].descricao
            
        }
    }

        return JSONProdutos

}

// console.log(getInfoProdutos('2'))
// console.log(getComentarios('2'))
// console.log(getInfoPerfil('1'))
// console.log(getPerfil('caua@gmail.com', '123456'))

module.exports = {
    getComentarios,
    getUsuarios,
    getListarUsuario,
    getListarProdutos,
}