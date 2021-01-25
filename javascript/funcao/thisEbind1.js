const pessoa = {
    saudacao : "ola",
    falar(){
        console.log(this.saudacao);
    }
}
//funciona
pessoa.falar()
const falar = pessoa.falar
falar() //não funciona pois a funcao foi chamada fora do escopo do objeto e não tem o this

const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa()//funciona pois foi passado o objeto do escopo
