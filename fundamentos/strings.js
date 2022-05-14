const escola = "Cod3r"

console.log(escola.charAt(4)) 
/* CharAt retorna o valor que está nessa posição no index da string
no caso, a letra 'r'*/
console.log(escola.charAt(5)) // Não retorna valor nenhum
console.log(escola.charCodeAt(3)) // Retorna o valor dentro da tabela Unicode
console.log(escola.indexOf(3)) // Informa se existe o valor dentro do index

console.log(escola.substring(1)) // A partir do index 1 até o final, ele vai imprimir 
console.log(escola.substring(0,3)) // vai do 0 (C) até o index 3 (3), mas ele não vai incluir o 3

console.log('Escola '.concat(escola).concat("!")) 
/* concat() retorna um novo array contendo todos os arrays ou valores passados como parâmetro */

console.log(escola.replace(3, "e")) // Mudou o 3 para letra e
/* replace() retorna uma nova string com algumas ou todas 
as correspondências de um padrão substituídas por um determinado caractere (ou caracteres)*/

console.log('Ana,Maria,Pedro'.split(',')) // vai gerar um array com 3 elementos separados por ,
/* O método split() divide uma String em uma lista ordenada de substrings, 
*coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, 
onde o padrão é fornecido como o primeiro parâmetro na chamada do método.*/

