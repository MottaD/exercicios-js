//Operadores relacionais: O resultado sempre será verdadeiro ou falso

console.log('01)' , '1' == 1) //São iguais porque compara o valor
//igual igual (==) é um operador relacional que compara a igualdade entre duas coisas
console.log('02)', '1' === 1)//Não são iguais porque o 1 é string e o outro number. Estritamente igual(===)
console.log('03)', '3' != 3 ) // != (diferente)
console.log('04)', '3' !== 3 ) // !== (estritamente diferente)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) //Data
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) //Comparando number

console.log('12)', undefined == null) //undefined é igual a nulo
console.log('13)', undefined === null)

//usar estritamente igual (===), é melhor que usar igualdade, que ignora a questão dos tipos.