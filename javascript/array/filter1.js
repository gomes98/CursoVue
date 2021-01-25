const produtos = [
    { nome: 'Notebook', preco: 1000, fragil: true },
    { nome: 'iPad', preco: 900, fragil: true },
    { nome: 'Copo de vidro', preco: 100, fragil: true },
    { nome: 'Copo de Plastico', preco: 200, fragil: false },
]

// quando a expressão da função retornar true, este array é colocado no retorno
console.log(produtos.filter(function (p) {
    return p.preco > 901
}));

// minha solucao
const fragil = p => p.fragil
const caro = p=> p.preco > 500

console.log(produtos.filter(fragil).filter(caro));
