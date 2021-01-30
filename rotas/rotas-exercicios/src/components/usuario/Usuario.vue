<template>
  <div class="usuario">
      <h2>Usuário</h2>
      <p> <strong>Codigo:</strong> {{ id}} </p>
      <button sucesso @click="voltar" >Voltar</button>
  </div>
</template>

<script>
export default {
  props: ['id'],
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   }
  // },
  // watch:{
  //   $route(to, from){
  //     this.id = to.params.id
  //   }
  // },
  methods: {
    voltar(){
      this.$router.push('/')
    }
  },
}
</script>

<style>

</style>