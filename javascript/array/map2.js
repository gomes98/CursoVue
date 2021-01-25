const carrinho = [
    '{ "nome" : "Borracha", "preco" : 3.45 }',
    '{ "nome" : "Caderno", "preco" : 13.90 }',
    '{ "nome" : "Kit de Lapis", "preco" : 41.22 }',
    '{ "nome" : "Caneta", "preco" : 7.50 }'
]
// minha solucao
const resultado = carrinho.map(function(e){
    let obj = JSON.parse(e)
    return obj.preco
})

console.log(resultado);

// solucao prof

const paraJson = json => JSON.parse(json)
const somPreco = produto => produto.preco

const resPro = carrinho.map(paraJson).map(somPreco)
console.log(resPro);