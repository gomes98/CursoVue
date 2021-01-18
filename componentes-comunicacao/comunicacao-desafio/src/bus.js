import Vue from 'vue'
export default new Vue({
    methods: {
        
        selecionarUsuario(usuario){
            this.$emit('usuarioSel', usuario)
        },
        usuarioSelecionado(callback){
            this.$on('usuarioSel', callback)
        }
    },
})