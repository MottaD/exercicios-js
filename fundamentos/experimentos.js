let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'Teste'

console.log(this.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)


//criando uma variavel maluca: sem var e let (isso coloca a variavel dentro do global no Node)
abc = 3 //Não faça iso em casa
console.log(global.abc)

//module.exports = { e:456, f: false, g:'teste'}