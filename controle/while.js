//WHILE: Estrutura mais apropriada para uma quantidade indeterminada de repetições
//Ele também pode ser utilizado com uma quantidade determinada de vezes.
//WHILE = Enquanto
/*While é uma estrutura de repetição baseada em uma expressão verdadeiro/falso que
enquanto for verdadeiro continua a repetir e quando for falso ele sai do laço*/

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0


while (opcao != -1){ //quando a opção for -1, o laço para
    opcao = getInteiroAleatorioEntre (-1,10)
    console.log(`Opção escolhida foi ${opcao}.` )
}

console.log('Até a próxima!')