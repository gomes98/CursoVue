new Vue({
    el: '#desafio',
    data: {
        nome: "Mauricio",
        idade: 34,
        imagem: 'https://vuejs.org/images/logo.png'
    },
    methods: {
        randon(){
            return Math.random(0,1);
        }
    },
})