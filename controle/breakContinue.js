//Break causa um desvio de curso, ou seja, ele sai de um ponto, pula umas linhas e vai para outro ponto
//Break NÃO influencia em blocos tipo: IF
//Break influencia em blocos tipo: SWITCH, FOR e WHILE
//CONTINUE funciona dentro de laços for e while.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Resumo: Ele foi até o índice 4, quando encontrou o 5 ele parou
    for (x in nums){ //x é o indice do array
        if (x == 5){
            break //vai agir sobre o bloco for// interrompe o laço e vai para a prox sentença de código fora do laço corrente
        } 
        console.log(`${x} = ${nums[x]}`) //${} está acessando o índice
     }


   //Resumo: foi até o índice 4, pulou o 5 e seguiu a partir do índice 6  
  for (y in nums){
      if (y == 5) {
          continue // interrompe a repetição atual e vai direto para a próxima, age no laço mais próximo (for)
      }
      console.log(`${y} = ${nums[y]}`)
  }

  //Atribuí um laço for para rotulo externo, ou seja, atribuí um nome para o rotulo
  //É RECOMENDADO NÃO USAR ESSE TIPO DE ESTRUTURA
  externo: 
for (a in nums) {
      for (b in nums) {
          if(a == 2 && b == 3) break externo //break vai agir no rotulo externo
          console.log(`Par = ${a}, ${b}`)
      }

    }

    console.log('Fim!')