//Estrutura Do/While se difere da WHILE porque na Do/WHILE não é necessario atribuir um balor inicial
//para a variavel opcao (ou a que estiver sendo utilizada)
//DO/WHILE não é usada com muita frequência


function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (min - max) + min
    return Math.floor(valor)
}

let opcao = -1 /*aqui pode ser -1 que não faz diferença, já que a expressão é depois do bloco. Ele executa a
primeira repetição, e o valor da função será alterado. Ele executa o código até achar o -1*/


//No DO/WHILE a expressão fica depois do bloco, nenhuma outra estrutura tem a expressão depois
 do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
} while (opcao != -1) //expressão depois do bloco

console.log('Até a próxima!')

