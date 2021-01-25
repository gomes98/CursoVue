<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr />
    <p v-text="'Usando Diretiva v-text'"></p>
    <p v-html="'Usando Diretiva <strong> v-text </strong>'"></p>
    <p v-destaque:fundo.atrasar="'gray'">Usando Diretiva Personalizada</p>
    <p v-destaque="cor">Usando Diretiva Personalizada</p>
    <hr />
    <p v-destaque-local:fundo.atrasar="'gray'">Usando Diretiva Local Personalizada</p>
    <p v-destaque-local="cor">Usando Diretiva Local Personalizada</p>
  </div>
</template>

<script>
export default {
  directives: {
    "destaque-local": {
      bind(el, binding) {
        // el.style.backgroundColor = 'lightgreen'

        let atraso = 0;
        if (binding.modifiers["atrasar"]) atraso = 3000;
        setTimeout(() => {
          if (binding.arg === "fundo") {
            el.style.backgroundColor = binding.value;
          } else {
            el.style.color = binding.value;
          }
        }, atraso);
      },
    },
  },
  data() {
    return {
      cor: "green",
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
