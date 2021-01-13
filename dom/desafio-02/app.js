new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta(){
            alert('desafio1')
        },
        down(event){
            this.valor = event.target.value
        }
    },
})