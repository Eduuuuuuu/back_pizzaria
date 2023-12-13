var usuarios = [
    {
        id:1,
        nome:'Eduardo Vilas Boas de Barros',
        email:'forister@gmail.com',
        senha:'JaimeOGordo',
        telefone:'1134558435',
        endereco:[
            {
                cidade:'Botucatu',
                cep:'18605-374',
                bairro:'Jardim Palos Verdes',
                logradouro:'Rua Narciso Taborda',
                numero:'241'
            }
        ]
    },

    {
        id:2,
        nome:'Enzo Bortolotti Aguado',
        email:'monguenzo@gmail.com',
        senha:'EnzoNDC12',
        telefone:'1628568159',
        endereco:[
            {
                cidade:'Franca',
                cep:'14401-240',
                bairro:'Vila Aparecida',
                logradouro:'Avenida Brasil',
                numero:'132'
            }
        ]
    },

    {
        id:3,
        nome:'Robert Medeiros',
        email:'robertbr__@gmail.com',
        senha:'RobertBr__23',
        telefone:'4638373139',
        endereco:[
            {
                cidade:'Curitiba',
                cep:'81450-180',
                bairro:'Cidade Industrial',
                logradouro:'Rua São Pedro Maria Chanel',
                numero:'468'
            }
        ]
    },

    {
        id:4,
        nome:'Adam',
        email:'Owl_Z@gmail.com',
        senha:'XxScorpion432xX',
        telefone:'9234646841',
        endereco:[
            {
                cidade:'Manaus',
                cep:'69093-524',
                bairro:'Colônia Terra Nova',
                logradouro:'Rua São Paulo',
                numero:'601'
            }
        ]
    },

    {
        id:5,
        nome:'Leandro Dudumi',
        email:'Richard@gmail.com',
        senha:'D.I.M.A',
        telefone:'8521036547',
        endereco:[
            {
                cidade:'Fortaleza',
                cep:'60863-058',
                bairro:'Barroso',
                logradouro:'Rua Antônio Carvalho',
                numero:'982'
            }
        ]
    }
]

var categoria = [
    {
        id:1,
        nome:"Pizzas Doces"
    },

    {
        id:2,
        nome:"Pizzas Salgadas"
    },

    {
        id:3,
        nome:"Bebidas"
    },

    {
        id:4,
        nome:'Sobremesas'
    },
]

var produtos = [
    {
        id:1,
        nome:'Pizza de calabresa',
        descricao:'Pizza de calabresa normal',
        preco:13,
        avaliacao:4,
        categorias:[
            categoria[2]
        ],
        comentarios:[
            {
                id:2,
                usuario: usuarios[0],
                comentario:'Pizza muito boa.',
                avaliacao:5
            }
        ]
    },

    {
        id:2,
        nome:'Pizza de pepperoni',
        descricao:'Pizza de Pepperoni com pepperoni da Itália',
        preco:25,
        avaliacao:5,
        categorias:[
            categoria[2]
        ],
        comentarios:[
            {
                id:5,
                usuario: usuarios[3],
                comentario:'Pizza incrível, mas um pouco cara.',
                avaliacao:5
            }
        ]
    },

    {
        id:3,
        nome:'Pizza de Chocolate com chantili e Morango',
        descricao:'Pizza de Chocolate com chantili e morango',
        preco:20,
        avaliacao:5,
        categorias:[
            categoria[1]
        ],
        comentarios:[
            {
                id:3,
                usuario: usuarios[1],
                comentario:'Melhor pizza que já provei.',
                avaliacao:5
            }
        ]
    },

    {
        id:4,
        nome:'Coca-Cola de 3 Litros',
        descricao:'Garrafa de 3 litros de Coca-Cola',
        preco:9.99,
        avaliacao:5,
        categorias:[
            categoria[3]
        ],
    },

    {
        id:5,
        nome:'Pepsi de 3 litros',
        descricao:'Garrafa de 3 litros de Pepsi',
        preco:9.9,
        avaliacao:5,
        categorias:[
            categoria[3]
        ],
    },

    {
        id:6,
        nome:'Pizza de Chocolate',
        descricao:'Pizza de chocolate com borda recheada de chocolate',
        preco:15,
        avaliacao:4,
        categorias:[
            categoria[1]
        ],
        comentarios:[
            {
                id:1,
                usuario: usuarios[1],
                comentario:'Pizza gostosa, mas a borda veio com pouco chocolate.',
                avaliacao:4
            }
        ]
    },

    {
        id:7,
        nome:'Cookie de caneca com calda de chocolate e pedaços de oreo',
        descricao:'Cookie de caneca com calda de chocolate e pedaços de bolacha oreo',
        preco:10,
        avaliacao:5,
        categorias:[
            categoria[4]
        ],
        comentarios:[
            {
                id:4,
                usuario: usuarios[2],
                comentario:'Cookie muito bom, com certeza vale muito pelo preço.',
                avaliacao:5
            }
        ]
    },
]

module.exports = {categoria, produtos, usuarios}