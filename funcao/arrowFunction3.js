let comparaComThis = function (param) {
    console.log(this === param) // aponta para o objeto global, logo, deu verdadeiro
}

comparaComThis(global) //no Browser serio o window

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // não aponta mais para o global
comparaComThis(obj) // agora aponta para o objeto

let comparaComThisArrow = param => console.log(this === param) //função definida em modulo do Node
comparaComThisArrow(global)//logo, não apontou para o global. Função arrow não aponta pro global
comparaComThisArrow(module.exports)// forma de chamar o modulo

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)// arrow function é mais forte que o bind
comparaComThisArrow(module.exports)
