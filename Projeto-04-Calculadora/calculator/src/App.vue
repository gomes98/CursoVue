<template>
  <div id="app">
    <h1>Caluladora</h1>
    <Calculator/>
  </div>
</template>

<script>
import Calculator from './components/main/Calculator.vue';
export default {
  components: { Calculator },};
</script>

<style>
body{
    margin: 0;
     font-family: 'Roboto Mono';
     
}
#app{
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: #fff;

    background: linear-gradient(to right, #4ecdc4, #556270); 
}
</style>