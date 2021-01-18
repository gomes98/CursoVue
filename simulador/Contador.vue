<template>
  <div class="contador">
    <span>Contador {{ contador }}</span>
    <button @click="incrementa">+</button>
    <button @click="decrementa">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0,
    };
  },
  methods: {
    incrementa() {
      this.contador++;
    },
    decrementa() {
      this.contador--;
    },
  },
};
</script>

<style>
.contador span {
  border-bottom: 1px solid #ccc;
  height: 30px;
  padding: 5px 35px;
}

.contador button{
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background-color: coral;
        color: #FFF;
        margin-left: 10px;
        outline: none;
    }
</style>