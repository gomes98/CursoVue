<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr />
    <p v-text="'Usando Diretiva v-text'"></p>
    <p v-html="'Usando Diretiva <strong> v-text </strong>'"></p>
    <p v-destaque:fundo.atrasar="'gray'">Usando Diretiva Personalizada</p>
    <p v-destaque="cor">Usando Diretiva Personalizada</p>
    <hr />
    <p v-destaque-local:fundo.atrasar="'gray'">
      Usando Diretiva Local Personalizada
    </p>
    <p v-destaque-local.alternar.atrasar="cor">Usando Diretiva Local Personalizada</p>
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
		if (binding.modifiers["atrasar"]) atraso = 3000;
		
		const cor1 = binding.value;
        const cor2 = "purple";
		let corAtual = cor1;
				
        setTimeout(() => {
          if (binding.modifiers["alternar"]) {
			  setInterval(() => {
				  corAtual = corAtual === cor1 ? cor2 : cor1 
				  aplicarCor(corAtual)
			  }, 1000);
          }else{
			  aplicarCor(binding.value);
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
