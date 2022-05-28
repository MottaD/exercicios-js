//const somaTresNumeros = (num1, num2, num3) => {
//    return num1 + num2 + num3
//}
//console.log( somaTresNumeros (1,2,2))

/* function somaNumerosInfinitamenteV1 () {
    const args = Array.from(arguments) //Array cria um objeto a partir de outro interabel
   let soma = 0;

   for(let i =  0; i < args.length; i++) {
       soma += args[i]
   }
   return soma;
}

console.log(somaNumerosInfinitamenteV1(1, 2, 3 ,4, 5)) */

function somaNumerosInfinitamenteV2 () {
    const args = Array.from(arguments) //Array cria um objeto a partir de outro interabel
   return args.reduce((acumulador, valorAtual) =>  //vai retornar somente um número
   
       acumulador += valorAtual)
   };

console.log(somaNumerosInfinitamenteV2(1, 2, 3 ,4, 5, 5, 5, 5))