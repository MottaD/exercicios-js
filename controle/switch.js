//Estrutura SWITCH para seleções multiplas
//Switch não retorna valores booleanos, geralmente trabalha com valores inteiros 
// mas não verdadeiro/falso

//O SWITCH tem um comportamento por padrão de sair executando todos os cases, para que isso não aconteça
//é necessário usar a palavra reservada "break" em cada case, porque assim ele vai parar.

//default pode ficar em qualquer posição, desde que coloque o break, caso ele não fique no final. 
//Default equivale ao else

const imprimirResultado = function (nota) {
    switch (Math.floor (nota)) { //math.floor arredonda a nota para baixo
        case 10: //Se a nota for 10 ou 9, ele executa o código
        case 9:
            console.log ('Quadro de Honra')
            break
        case 8:
        case 7:
            console.log ('Aprovado')
            break
        case 6: case 5: case 4:
            console.log ('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log ('Reprovado')
           break
        default:
            console.log ('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8,9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)