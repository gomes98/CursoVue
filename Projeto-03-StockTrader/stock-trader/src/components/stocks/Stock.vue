<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="green darken-3 white--text">
      <v-card-title class="headline">
        <strong
          >{{ stock.name }} <small>(Preço: {{ stock.price | currency }})</small></strong
        >
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field
          :error="insufficientFunds || !Number.isInteger(quantity) || quantity < 0"
          label="quantidade"
          type="number"
          v-model.number="quantity"
        />
        <v-btn
          :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
          class="green darken-3 white--text"
          @click="buyStock"> {{ insufficientFunds ? "Insuficiente" : "Comprar"}} </v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  computed:{
    funds(){
      return this.$store.getters.funds
    },
    insufficientFunds(){
      return this.quantity * this.stock.price > this.funds
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.quantity = 0;
      this.$store.dispatch('buyStock', order)
    },
  },
};
</script>

<style>
</style>