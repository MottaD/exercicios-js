//Boolean: valores true/false

let isAtivo = false // Literal falso para definir valor falso
console.log(isAtivo)

isAtivo = true // Literal verdadeiro para definir valor verdadeiro
console.log(isAtivo)

isAtivo = 1 //Podemos usar 1 para imprimir um valor booleano
console.log(!!isAtivo) //Transformamos o number em valor booleano através da negação (!/!!)
// ! = NEGAÇÃO; !! = VERDADEIRO (Uma ! torna o valor em falso, enquanto duas !! torna em verdadeiro)

//Tipos de verdadeiros (Exemplos de valores que serão verdadeiros)
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

//Tipos de falso (Exemplos de valores que serão falsos)
console.log('os falsos...')
console.log(!!0)
console.log(!!'') // string vazio, sem espaço
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar')
console.log(!!('' || null || 0 || ' ' )) // retorna o único valor verdadeiro
// || signigica ou, serve para dar um valor padrão para uma variável

let nome = ''
console.log(nome || 'Desconhecido') /* Se tiver nome, vai imprimir o nome, se não tiver, será desconhecido 
por causa do ou (||)*/