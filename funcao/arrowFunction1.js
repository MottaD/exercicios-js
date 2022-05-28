//formas de escrever a mesma função

let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' // Forma padrão de se trabalhar
ola = _ => 'Olá'//O underline é um parâmetro
console.log(ola())
