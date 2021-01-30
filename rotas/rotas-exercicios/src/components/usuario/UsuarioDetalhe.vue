<template>
  <div class="usuario-detalhe">
      <h3>Usuário Detalhe</h3>
      <hr>
      <p> <strong>Codigo:</strong> {{ id }} </p>
        <!-- :to="`/usuario/${id}/editar`" -->
      <router-link tag="button" primario 
      :to="{name: 'editarUsuario', params:{ id}, 
        query: { completo: true , lingua : 'pt-br'},
        hash: '#rodape'}">
        Editar</router-link>
        <button @click="confirmou = !confirmou" primario>Confirmar</button>
  </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
      return {
        confirmou : false,
      }
    },
    beforeRouteLeave (to, from, next) {
      if(this.confirmou){
        next()
      }else{
        if(confirm('Tem Certeza ?')){
          next()
        }else{
          next(false)
        }
      }
    }
    // antes de entrar
    // beforeRouteEnter (to, from, next) {
    //   console.log('Dentro do Comp Detalhe');
      // next(vm => {
      //   console.log(vm.id)
      // })
      // const auth = false
      // auth ? next() : next(false)
    // }
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