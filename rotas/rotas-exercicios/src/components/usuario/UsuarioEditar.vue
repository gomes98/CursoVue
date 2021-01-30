<template>
  <div class="usuario-editar">
      <h3>Usuário editar</h3>
      <hr>
      <p> <strong>Codigo:</strong> {{ id }} </p>
      <p> <strong>Completo: </strong> {{$route.query.completo}} </p>
      <p> <strong>Lingua: </strong> {{$route.query.lingua}} </p>
      <div id="rodape">
        <h3>Curso Vue</h3>
      </div>
  </div>
</template>

<script>
export default {
    props: ['id'], 
}
</script>

<style>
#rodape{
  margin-top: 1000px;
}
</style>