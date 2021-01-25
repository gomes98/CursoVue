// let e const
{
    var a = 2 // fica acessivel fora do bloco
    let b = 3 // fica somente acessivel dentro do bloco
    console.log(b);
}
console.log(a);

// Template String
const produto = 'Note i7'
console.log(`${produto} é caro`);
console.log(`${produto} 
é 
caro`);

// Destructuring
const [l,e,...tras] = "Maria"
console.log(l,e,tras);
//array
const [x, ,y] = [1,2,3]
console.log(x,y);
//objeto
const {idade, nome} = {nome: 'Michele', idade: 32}
console.log(idade , nome);