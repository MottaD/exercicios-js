 /* o valor this é determinado pela forma como a função é chamada. 
Ele não pode ser assinado durante a execução,
 e isso pode ser diferente a cada vez que a função é chamada */

 // Chamar o this diretamente no console nos traz o objeto global do contexto em que o JS está executando
// O this no devtools do chrome nos traz o objeto "window", no Node nos traz o objeto "global"

 console.log(this.document === document)
 
//Em navegadores web, o objeto window é também o objeto global:
 console.log(this === window);  //true

this.a = 37
console.log(window.a);  // 37

//os codigos acima são para serem executados no console


//Quando não estiver no modo estrito, o this apontará para o objeto global
function thisNaoEstrito(){ console.log(this)}

/* Em modo estrito, o valor de this permancece seja qual for o definido ao entrar no contexto de execução,
assim no caso a seguir o this por padrão será indefinido (undefined) */
function thisEstrito(){`use strict`; console.log(this)}

