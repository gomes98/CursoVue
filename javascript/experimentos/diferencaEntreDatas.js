let agora = new Date()
console.log(agora);
let antes = new Date('2021-01-20')
console.log(antes);

function dateDiff(data1, data2) {
    // pega o valor absoludo entre as datas
    let diferenca = Math.abs(data1.getTime() - data2.getTime());
    // contantes para calculo
    const umDiaMS = (1000 * 60 * 60 * 24) // 86400000 ms tem em um dia
    const umaHoraMS = (1000 * 60 * 60) // 3600000 ms em uma hora
    const umaMinutosMS = (1000 * 60)
        // operações envolvendo datas
    let dias = Math.trunc(diferenca / umDiaMS)
    let horas = Math.trunc((diferenca - (dias * umDiaMS)) / umaHoraMS)
    let minutos = Math.trunc((diferenca - ((dias * umDiaMS) + (horas * umaHoraMS))) / umaMinutosMS)
    let segundos = Math.trunc((diferenca - ((dias * umDiaMS) + (horas * umaHoraMS) + (minutos * umaMinutosMS))) / 1000)

    return { dias, horas, minutos, segundos }

}
console.log(dateDiff(agora, antes))