new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100,
        logs: [],
    },
    methods: {
        startGame() {
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
        },
        atack(special) {
            this.hurt('monsterLife', 6, 11, special, 'Jogador', 'Monstro', 'player')
            if(this.monsterLife == 0){
                return;
            }
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'jogador', 'monster')
        },
        hurt(jogador, min, max, especial, source, target,cls) {
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[jogador] = Math.max(this[jogador] - hurt, 0)
            this.registerLog(`${source} atingiu ${target} com ${hurt}`, cls);

        },
        heltAndHurt() {
            this.helt(10, 15)
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
            
        },
        helt(min, max) {
            const h = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + h, 100)
            this.registerLog(`O Jogador ganhou forca de ${h}`,'helt')
        },
        getRandom(min, max) {
            const v = Math.random() * (max - min) + min
            return Math.round(v);
        },
        registerLog(text, cls){
            this.logs.unshift({text, cls})
        }
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        },

    },
    watch: {
        hasResult(value) {
            if (value) this.running = false
        }
    }
})