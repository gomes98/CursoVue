<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="blue darken-3 white--text">
      <v-card-title class="headline">
        <strong>
          {{ stock.name }} 
          <small>(Preço: {{ stock.price | currency }} | Qtde: {{stock.quantity}})</small>
        </strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field
          label="quantidade"
          type="number"
          v-model.number="quantity"
        />
        <v-btn
          :disabled="quantity <= 0 || !Number.isInteger(quantity) || insufficientsQt"
          class="blue darken-3 white--text"
          @click="sellStock"
          >Vender</v-btn
        >
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
    insufficientsQt(){
      return this.quantity > this.stock.quantity
    }
  },
  methods: {
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.quantity = 0;
      this.$store.dispatch('sellStock', order)
    },
  },
};
</script>

<style>
</style>