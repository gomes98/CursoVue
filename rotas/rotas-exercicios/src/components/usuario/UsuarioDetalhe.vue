<template>
  <div class="usuario-detalhe">
      <h3>Usuário Detalhe</h3>
      <hr>
      <p> <strong>Codigo:</strong> {{ id }} </p>
        <!-- :to="`/usuario/${id}/editar`" -->
      <router-link tag="button" primario 
      :to="{name: 'editarUsuario', params:{ id}, 
        query: { completo: true , lingua : 'pt-br'}}">
        Editar</router-link>
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
}
</script>

<style>

</style>