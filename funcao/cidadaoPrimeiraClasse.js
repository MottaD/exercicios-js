// Função em JS é First- Class Object (Citizens) (Primeira classe) 
// Higher- Order Function (Função de alta ordem)

// declaração de função de forma literal
function fun1 () { } //o retorno de valor é opcional, mas o bloco é OBRIGATÓRIO

// Armazenar função em uma variável
const fun2 = function () { }

// Armazenar função em array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Como passar função como parâmetro para outra função
function run(fun) {
    fun() //para invocar a função precisa dos parenteses
}

run(function () { console.log('Executando...')})

//Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)
//ou fazer desta forma:
const cincoMais = soma(2,3)
cincoMais(4)
