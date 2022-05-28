const soma = function (x, y ){
    return x + y
}

const imprimirResultado = function (a, b , operacao = soma) {
    console.log(operacao(a, b))

} 
imprimirResultado (3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado (3, 4, function (x, y) {
    return x - y
})

imprimirResultado( 3, 4, (x , y) => x * y)//quando tem arrow function, sempre é anonima pq não tem como nomear


//Função anonima dentro de um objeto
const pessoa = {
    falar: function (){
        console.log('Opa')
    }
}
pessoa.falar()