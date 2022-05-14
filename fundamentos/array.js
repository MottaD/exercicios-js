/* ARRAY = É um vetor, estrutura unidirecional onde você consegue agrupar multiplos valores de uma
forma linear. */

// Declaração de Array de forma literal através de []
const valores = [7.7, 8.9, 6.3, 9.2] // Array com 4 elementos, que são determinados pelas vírgulas
console.log(valores[0], valores[3]) // Valores de índice 0 e valores de índice 3, 7.7 e 9.2
console.log(valores[4])// Undefined, porque o índice 4 não existe


valores[4] = 10 //Acrescentou o índice 4 no array que é 10.
console.log(valores) 
console.log(valores.length)// Variável lenght diz quantos elementos tem no array
 
//Função push: adiciona outros elementos no array
valores.push({id:3}, false, null, 'teste') 
console.log(valores)


//Função pop: ele retira o valor do array (no caso o último valor)
console.log(valores.pop())

//função delete: Também retira valores do array
delete valores [0] // valor do índice 0, mas podemos definir o valor do índice
console.log(valores)

//Tipo do array: No javascript, array é um objeto
console.log(typeof valores)