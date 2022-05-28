//Destructuring: array dentro dos parâmetros de função
function rand ([ min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] //Se min for maior que o máximo, inverta as duas variaveis
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) //Chamamos a partir de array e imprimiu o valor trocado e de forma correta
console.log(rand([992])) //apenas um dos valores, intervalo entre esse valor e 1000
console.log(rand([, 10])) //apenas os valores maximos até 10 e o minimo 0
console.log(rand([])) //Array vazio assume os valores padrões
//console.log(rand()) //erro por ser uma propriedade de undefined