//Estrutura de controle: IF e ELSE. Else = Senão no português

const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!')//Como é uma string, o valor será falso então vai dar como reprovado. CUIDADO!