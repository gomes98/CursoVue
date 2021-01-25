function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0
    
    // this torna o metodo ou a variavel publica
    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = () => velocidadeAtual
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350,25)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro);
console.log(typeof ferrari);