export default {
    namespaced: true,
    state: {
        produtos: [],
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
        }
    },
    actions:{
        adicionarProdutos(context, payload){
            setTimeout(()=>{
                context.commit('adicionarProdutos', payload)
            }, 1000)
        }
    }
}