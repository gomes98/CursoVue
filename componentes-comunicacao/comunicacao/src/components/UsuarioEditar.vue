<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade é <strong>{{idade}}</strong></p>
        <button @click="alterarIdade" >Alterar Idade</button>
    </div>
</template>

<script>
import bus from '@/bus'
export default {
    props:{
        idade: Number

    },
    methods: {
        alterarIdade(){
            this.idade += 1
            bus.$emit('idadeMudou', this.idade)
        }
    },
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
