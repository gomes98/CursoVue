<template>
  <div>
    <div class="cabecalho">Resultado</div>
    <rotulo nome="Nome">
      <input type="text" name="nome" :value="value.nome" @input="alterarNome"/>
    </rotulo>
    <rotulo nome="Sobrenome">
      <input type="text" name="sobrenome" :value="value.sobreNome" @input="alterarSobrenome" />
    </rotulo>
  </div>
</template>

<script>
import Rotulo from "./Rotulo.vue";
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  components: { Rotulo },
  methods: {
    alterarNome(event) {
      this.$emit("input", {
        nome: event.target.value,
        sobreNome: this.value.sobreNome,
      });
    },
    alterarSobrenome(event) {
      this.$emit("input", {
        nome: this.value.nome,
        sobreNome: event.target.value,
      });
    },
  },
};
</script>

<style>
</style>