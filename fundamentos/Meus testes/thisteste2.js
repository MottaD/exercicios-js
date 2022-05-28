//Como método de um objeto
const o = {
    prop: 100,
    f: function() { //função f retorna uma referencia ao objeto, acessando uma propriedade dele
        return this.prop
    }
}

console.log(o.f())

//THIS EM ARROW FUNCTIONS
/* Nas arrow functions (funções seta), o this é definido lexicalmente, isto é, seu valor 
é definido pelo contexto de execução onde está inserido. Em um código global, this assume o obj global: */

//CONTEXTO DE CRIAÇÃO: GLOBAL
const arrowFunctionThis = () => { console.log(this)}

//CONTEXTO DE CRIAÇÃO: OBJETO // ERRADO
const arrowFunctionThis2 = {
    prop2: 150,
    arrowF: () => { console.log(this)}
}

//CONTEXTO DE CRIAÇÃO: OBJETO // CORRETO
const obj1 = {
    exemplo1: "exemplo1",
    mostraThis: function() {
        const f = (() => this)() //declarada e chamada ao mesmo tempo. O this dessa => é o obj1
        console.log( )
    }
}