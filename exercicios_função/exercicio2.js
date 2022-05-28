//Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua
//classificação quanto ao tamanho de seus lados.

//Equilátero: Os três lados são iguais
//Isósceles: Dois lados iguais
//Escaleno: Todos os lados são diferentes.

function triangulos (lado1, lado2, lado3){
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

console.log(triangulos(2,2,2))
console.log(triangulos (2,2,4))
console.log(triangulos(1,2,3))