// operador ...rest(juntar)/spread(espalhar)


// usar spread com objeto
const funcionario = { nome: 'Michele', salario: 12345.67}
//faz um clone (copia) do objeto
const clone = { ativo: true,...funcionario}

console.log(clone);

// usar spread com Array
const grupoA = ['joao', 'pedro', 'gloria']
const grupoFinal = ['Michele',  'Maria', ...grupoA]
console.log(grupoFinal);