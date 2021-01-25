function Pessoa(){
    this.idade = 0
    // armazenando o this desta funcao no aributo self
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade);
    }, 1000);
}

new Pessoa