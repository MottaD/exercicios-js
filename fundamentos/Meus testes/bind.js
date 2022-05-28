/* O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave
 this definida com o valor fornecido, com uma sequência determinada de argumentos
 precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada. */

//O bind pega o this e liga a uma nova função quando ele é criado

 //Exemplo:
 //'use strict' faz com que o this aponte para undefined
 function thisBindExemplo(){
     console.log(this) //this da função
 }

 const obj = {exemplo: "exemplo"}

 thisBindExemplo = thisBindExemplo.bind(obj)  //nessa nova função, o this é do "obj"

 thisBindExemplo()