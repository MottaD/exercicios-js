var numero = 1; 
{
    //escopo de bloco, visivel somente dentro do bloco
    let numero = 2;
    console.log('dentro =',numero);
}

console.log(' fora = ', numero);

/* O JS dá prioridade para o escopo menor, que no caso é o de LET que está dentro do bloco,
para depois procurar um externo/mais abrangente.
- Caso não ache o valor no interno, ele vai pro externo
*/

//Váriaveis definidas com a palavra reservada VAR, tem escopo: Global e de Função
//Váriaveis definidas com a palavra reservada LET, tem escopo: Global, de Função e de Bloco