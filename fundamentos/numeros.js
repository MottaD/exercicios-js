const peso1 = 1.0
const peso2 = Number('2.0') // Outra forma de declarar numero

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))// isInteger vai informar se o valor é inteiro ou não, dizendo true/false
console.log(Number.isInteger(peso2))
// Exemplo para calcular uma média de avaliação
const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // toFixed vai imprimir o número de casas decimais escolhidas, no caso 2
console.log(media.toString()) // toString converte o valor númerico em uma string
console.log(media.toString(2)) /*
 colocando o 2 dentro de toString, transformou o valor em binário  (funciona com outros números)*/

console.log(typeof media)
console.log(typeof Number) // Number com N maiusculo é uma função


