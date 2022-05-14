//notação ponto (.)

console.log(Math.ceil(6.1)) //ceil = arredondamento (arredondou pra 7); ceil é teto, arredonda pra + ou pra -

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2' //Sobrescreve o valor do atributo nome
console.log(obj1.nome)

function Obj(nome) { //função com parâmetro nome
    this.nome = nome //this.nome = nome associado ao objeto que for criado a partir da função
    this.exec = function () {
        console.log ('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()