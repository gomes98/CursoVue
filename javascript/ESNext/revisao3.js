// ES8 Object.value / Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Melhorias na Notacao Literal
const nome = "Maria"
const pessoa = {
    nome,
    ola(){
        return 'Olar!!!'
    }
}

console.log(pessoa.nome, pessoa.ola());

// Class
class Animal {}
class Cachorro extends Animal{
    falar(){
        return 'Au Au Au'
    }
}

console.log(new Cachorro().falar());