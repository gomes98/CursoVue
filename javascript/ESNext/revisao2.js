// Arrow function são sempre funções anonimas
const soma = (a,b) => a+b
console.log(soma(2,2));

// Arrow (this)
const lexico1 = () => console.log(this === exports);
// não altera o contexto da funcao
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
function log(texto = 'Node'){
    console.log(texto);
}
log()
log("AHAM")

// operador REST
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5,6,7,8,9));