const notas = [2.2,3.3,4.4,6.6,7.7,8.8,9.9]

// sem callback
let notasBaixas = []

for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas);

// Com callback
notasBaixas = []
notasBaixas = notas.filter(a => a < 7)
console.log(notasBaixas);