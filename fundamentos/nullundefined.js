//Null e Undefined
let valor // não inicializada
console.log(valor) // Valor undefined porque não teve nenhum valor atribuido.

//console.log(valor2) //is not defined, o valor 2 nem foi declarado no programa. 

valor = null //ausência de valor (definimos o valor null, que não aponta para nenhum endereço na memória)
console.log(valor)
//console.log(valor.toString()) //Vai dar um erro porque não tem como ler variável de null

const produto = {}
console.log(produto.preco) // Undefined = preço não definido no produto
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco 
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)