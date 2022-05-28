/*Estrutura FOR: cria um loop que consiste em três expressões opcionais, dentro de parênteses e 
separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência 
de declarações executadas em sequência. */

let contador = 1
 while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
 }

for(let i = 1; i <= 10; i++){
   console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++) { //lenght: tamanho do array
   console.log(`nota = ${notas[i]}`)
} 