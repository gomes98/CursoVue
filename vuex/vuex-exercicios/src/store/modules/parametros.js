export default {
    state: {
        quantidade : 1,
        preco: 10.01
    },
    mutations:{
        setPreco(state, payload){
            state.preco = payload
        },
        setQuantidade(state, payload){
            state.quantidade = payload
        }
    },
}