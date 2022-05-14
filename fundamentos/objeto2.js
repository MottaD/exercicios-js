console.log(typeof Object)
console.log(typeof new Object) //Instanceando uma função para fazer um objeto

const Cliente = function (){}
    console.log(typeof Cliente) //função
    console.log(typeof new Cliente) //Objeto

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto) // Função
console.log(typeof new Produto) //Objeto
