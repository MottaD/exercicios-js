//Operador ternário : uma operação com três operandos. 
//Uma operação ternária é uma função com três variáveis de entrada

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
console.log(resultado(7.1))
console.log(resultado(6.7))


//Primeiro operando: nota >= 7
//Segundo operando: retorna Aprovado se for verdadeiro
//Terceiro operando: retorna Reprovado se for falso
// ? (interrogação) serve para indicar se é verdadeiro ou falso