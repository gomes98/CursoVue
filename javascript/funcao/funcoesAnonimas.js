const soma = function(a,b){
    return a + b
}

const imprimeResultado = function(x,y,operacao = soma){
    console.log(operacao(x,y));
}

imprimeResultado(2,3)
imprimeResultado(2,3, soma)
imprimeResultado(3,2, function(a,b) {return a-b})
imprimeResultado(3,2, (a,b) =>  a*b)