import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        produtos: [],
        quantidade : 1,
        preco: 10.01
    },
    getters: {
        valorTotal(state) {
            return state.produtos
                .map((p) => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0);
        }
    },
    mutations:{
        adicionarProdutos(state, payload){
            state.produtos.push(payload)
        },
        setPreco(state, payload){
            state.preco = payload
        },
        setQuantidade(state, payload){
            state.quantidade = payload
        }
    },
    actions:{
        adicionarProdutos(context, payload){
            setTimeout(()=>{
                context.commit('adicionarProdutos', payload)
            }, 1000)
        }
    }
})