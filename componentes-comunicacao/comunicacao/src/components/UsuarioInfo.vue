<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuario <strong>{{inverterNome()}}</strong></p>
        <p>Idade é <strong>{{idade}}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFN()">Reiniciar Nome CallBack</button>
    </div>
</template>

<script>
import bus from '@/bus'
export default {
    props: {nome: {
        type : String, 
        default: 'Anonimo',
        required : true,},
        reiniciarFN:Function,
        idade: Number
        },
        
        
    methods: {
        inverterNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            this.nome = 'Pedro'
            this.$emit('nomeMudou', this.nome)
        }
    },
    created() {
        // bus.$on('idadeMudou', idade =>{
        //     this.idade = idade
        // })
        bus.quandoIdadeMudar(idade =>{this.idade = idade})
    },
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
