<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr />
    <p v-text="'Usando Diretiva v-text'"></p>
    <p v-html="'Usando Diretiva <strong> v-text </strong>'"></p>
    <p v-destaque:fundo.atrasar="'gray'">Usando Diretiva Personalizada</p>
    <p v-destaque="cor">Usando Diretiva Personalizada</p>
    <hr />
    <p v-destaque-local:fundo.atrasar="{cor1 : 'green', atraso: 1500}">
      Usando Diretiva Local Personalizada
    </p>
    <p v-destaque-local.alternar.atrasar="{cor1 : 'green', cor2:'red', atraso: 1000, intervalo: 200}">
      Usando Diretiva Local Personalizada
    </p>
  </div>
</template>

<script>
export default {
  directives: {
    "destaque-local": {
      bind(el, binding) {
        const aplicarCor = (cor) => {
          if (binding.arg === "fundo") {
            el.style.backgroundColor = cor;
          } else {
            el.style.color = cor;
          }
        };

        let atraso = 0;
        if (binding.modifiers["atrasar"]) atraso = binding.value.atraso;

        const cor1 = binding.value.cor1;
        const cor2 = binding.value.cor2;
        let corAtual = cor1;

        setTimeout(() => {
          if (binding.modifiers["alternar"]) {
            setInterval(() => {
              corAtual = corAtual === cor1 ? cor2 : cor1;
              aplicarCor(corAtual);
            }, binding.value.intervalo);
          } else {
            aplicarCor(binding.value.cor1);
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
