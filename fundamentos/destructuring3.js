/*Passaremos um objeto para a função, e dentro dessa função ele retira
de dentro do objeto o atributo min e max pronto, sem usar a notação para acessar o objeto */

function rand({ min = 0, max = 1000}) {
    const valor = Math.random () * (max - min) + min
    return Math.floor (valor)
}


const obj = { max: 50, min: 40}
console.log(rand(obj)) //gera valores randomicos entre 50 e 40
console.log(rand({min: 955})) // valor de 955 - 1000
console.log(rand({}))// Passa valores entre 0 e 1000
//console.log(rand())// Sem passar objeto nenhum e dará erro