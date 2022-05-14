// Armazenando uma função em uma variavel
/*Constante recebe function*/
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma vaiavel
const soma = (a, b) => { /*a setinha é a forma reduzida de chamar function */
    return a + b
}

console.log(soma(2,3 ))

// Retorno implícito
const subtracao = (a, b) => a - b //sintaxe em uma linha
console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')

/* a , b = são parâmetros
   => arrow function */
