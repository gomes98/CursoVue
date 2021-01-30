<template>
  <div class="usuario-editar">
      <h3>Usuário editar</h3>
      <hr>
      <p> <strong>Codigo:</strong> {{ id }} </p>
      <p> <strong>Completo: </strong> {{$route.query.completo}} </p>
      <p> <strong>Lingua: </strong> {{$route.query.lingua}} </p>
  </div>
</template>

<script>
export default {
    props: ['id'], 
}
</script>

<style>

</style>