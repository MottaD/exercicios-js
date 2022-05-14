const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + "!"
const template = ` 
    Olá
    ${nome}!` // Ele fez interpolação e substituiu pela variável
   { /*
   Uma string com apóstrofos (`) permite que você utilize substituição de texto utilizando a sintaxe ${}.
O que está dentro das chaves é interpretado como uma expressão Javascript - você pode colocar aí uma
chamada de função, uma multiplicação, entre outros, e o resultado vai ser adicionado a string na posição
onde o ${} está.

Com esse ${}, fica explícito para o programador que é um template e fácil pro interpretador 
Javascript processar ele. O interpretador vê que o caractere da string é um $, e se o próximo for um 
{ ele começa a procurar pelo }. Se não tiver {,  é um dólar normal que vai ser adicionado a string. 
Se tiver { e não tiver um }, isso vai dar um erro.

*/ }
console.log(concatenacao, template)

//expressoes...
console.log (`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() //texto= string toUppercase= tudo maiusculo
console.log (`Ei... ${up('cuidado')}!`)

/* O cifrão ($) com as { }, mostra que o valor é uma string para ser exibida. Ele mostra o que é o código 
do Javascript, além do mais, também é possivel adicionar funções dentro dessas {}
 */