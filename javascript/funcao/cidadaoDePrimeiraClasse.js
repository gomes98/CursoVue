// função em js é First-Class Object (citizens)
// Higher-Order function

// criar de forma literal
function fun1(){}

// Armazenar em Variavel
const fun2 = function () {}

//Armazenar em Array
const array = [function(a,b){return a+b}, fun1, fun2]
console.log(array[0](2,3));

//armazenar em onjeto

const obj = {}
obj.falar = function(){console.log("OPA");}
obj.falar();

//passar como parametro

function run(fun){
    fun()
}

run(function(){console.log("Executando....");})

//funcao que retorna função

function somar(a,b){
    return function(c){
        console.log(a+b+c);
    }
}

somar(2,3)(4)

const cincoMais = somar(2,3)
cincoMais(5)