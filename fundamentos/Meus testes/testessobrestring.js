{
let teste = "KDAJSKDSAJSL"

console.log(teste.charAt(1))
/*CharAt informa o caractere na posição que for indicada entre (), se não tiver nada indicado
ele coloca o primeiro caractere da string */
}

{
let texto = "eu amo o Javascript"
let textoAtualizado = texto.replace("Javascript","PHP")
console.log(textoAtualizado)
/*Replace permite localizar o caractere/caracteres dentro de uma string e substituir
por outro caractere. Ele comportou 2 dois parâmetros onde o primeiro é o que é localizado e o segundo
é o caractere que vai substituir o primeiro. Ele acheira também RegEx e Function como parâmetros */
/*Outro exemplo sem criar uma nova variavel para o replace:*/
    let texto2 = "Eu amo o PHP"
    texto2 = texto.replace("PHP","Javascript")
    console.log(texto2)

}

{
 //Substring
 /* É um método utilizado para manipular strings e também retorna parte de uma string
  Aceita dois parâmetros: IndexStart(de onde tiramos o valor da string) e IndexEnd(opcional)
  */   
 /* No Substring é passado a posição inicial e final */

        let mensagem = "Eu trabalho com Javascript, VueJS e PHP";
        let palavra = mensagem.substring(16,26) /*16(quantidade de caracteres antes do Javascript) é o Indexstart 
        e 26 indexEnd que é opcional*/
        console.log(palavra) //Javascript       
}   

{
  //Split
  /* É utilizado para dividir string em um array
  Divisão feita através de um delimitador que pode ser um ou mais caracteres, e também aceita um
  outro parametro que é a quantidade de vezes que a string será dividida.
  */  
    // O delimitador também pode ser vírgula, cadeia de caracteres

        //Separar a string com o split
        let textosplit = "Este é um texto para o teste";
        let resultado = textosplit.split (" ");
        console.log(resultado) 

        //Parâmetro limite
        let textosplit2 = "Este é um texto para o teste"
        let resultado2 = textosplit2.split(" ",3) // 3 é o parametro para divisão
        console.log(resultado2)    
}

{
    {//indexOf
    /*Procura dentro de arrays e strings para encontrar uma ocorrência desejada
    Sintaxe:
    array.indexOf(elementodePesquisa, [pontoInicial = 0])
        (no lugar de array pode ser string )
    */ 
    /* 1º Parâmetro: 
    - Valor a ser encontrado dentro de uma string ou array
    2º Parâmetro:
    - Indice para iniciar a procura (número)
    - Se for passado maior ou igual o tamanho do array/string, retorna -1 como ocorrência não encontrada
    */
    // Pode ser usado como:
    // - Filtros de listas na tela
    // Qualquer lógica que preciar comparar strings ou buscar dentro de um array
    }
    // Procurar inteiro em array
    let numeros = [5,10,15];
    console.log(numeros.indexOf(10)); // Retorna a posição 1 que a posição em que está o número 10

    // Procurar string dentro de um array de strings
    let frutas = ['Pera', 'Laranja' , 'Maça']
    console.log(frutas.indexOf('Pera')) // Retorna a posição 0 que a posição de Pera

    // Procurar uma string dentro de outra
    let textoindex = "um texto para teste"
    console.log(textoindex.indexOf("teste")) // Mostra a posição de caracteres
}

{
    //Concat
    /* É o método utilizado para juntar strings e arrays e a sintaxe para os dois é a mesma.
    O concat faz a junção de duas partes e retorna esse valor para ser utilizado */

    //Como juntar duas strings
    let string1 = "texto 1 "
    let string2 = "texto 2"
    let valor = string1.concat(string2 , string1); 
    //sintaxe padrão. Quando colocamos , podemos adicionar outros valores
    console.log(valor)

    // outro tipo de declaração com crase, dolar e chaves
    let valor2 = `${string1} ${string2}` 
    console.log(valor2)

    //juntar arrays
    let array1 = [1,2,3]
    let array2 = [4,5,6]
    let valorarray = array1.concat(array2)
    console.log(valorarray)

}

{
    //chatcodeAt
    /*O método charCodeAt() retorna um número inteiro entre 0 e 65535 que representa a unidade de código UTF-16
     no índice fornecido. 
     A unidade de código UTF-16 corresponde ao ponto de código Unicode
    para pontos de códigos representáveis em uma única unidade de código UTF-16
    */

    let code = 'ABC'
    console.log('ABC'.charCodeAt(0)); // Retorna o valor 65, valor de A

    let code2 =" Testando charCodeAt"
    console.log(code2.charCodeAt(5)); //Valor de a, retorna 97

    

}