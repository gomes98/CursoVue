Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i =0 ; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 1000, fragil: true },
    { nome: 'iPad', preco: 900, fragil: true },
    { nome: 'Copo de vidro', preco: 100, fragil: true },
    { nome: 'Copo de Plastico', preco: 200, fragil: false },
]


// minha solucao
const fragil = p => p.fragil
const caro = p=> p.preco > 500

console.log(produtos.filter2(fragil).filter2(caro));
