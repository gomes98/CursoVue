<template>
  <div class="usuario">
      <h2>Usuário</h2>
      <hr>
      <router-view />
      <button sucesso @click="voltar" >Voltar</button>
  </div>
</template>

<script>
export default {
  methods: {
    voltar(){
      this.$router.push('/')
      this.$router.push({name : 'inicio'})
    }
  },
}
</script>

<style>

</style>