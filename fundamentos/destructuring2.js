//Destructuring através do array
//Destructuring de um array é feito através dos colchetes, mas precisamos saber se estamos criando array
// ou desestruturando.

const [a] = [10]
console.log(a)

const [n1, ,n3, ,n5, n6 = 0] = [10, 7, 9, 8] //ignorando/pulando alguns elementos
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6 ,8]]
console.log(nota)