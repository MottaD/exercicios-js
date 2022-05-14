{
// Função é um bloco de código que recebe um nome, para podermos chamá-lo quantas vezes quisermos.
// Função pode não receber nenhum parâmetros
// Função pode não retornar dados
// Função pode receber dados de entrada/ e retorna algo 
}

//Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5, 6, 7, 8)

//Função com retorno
function soma(a, b = 1) /*O valor padrão de b é 1 */ { 
    return a + b //retorno do valor
}

console.log(soma(2, 3)) //Para imprimir o valor no console
console.log(soma(2)) //O resultado foi 3 porque o valor de b da soma é 1
console.log(soma()) //NaN