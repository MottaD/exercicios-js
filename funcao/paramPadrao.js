// estrategia 1 para gerar valor padrao
function soma1(a, b, c) {
    a = a || 1 //a recebe a ou valor 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0 , 0, 0)) //soma dos 0 retorna o valor padrão

// Estratégia 2, 3 e 4 para gerar valor padrão
{
    //Legenda da função:
    // se a for diferente de undefined, usamos o operador ternário. Caso a seja igual ao undefined
    // ele assume o valor de 1.
    }

function soma2(a, b, c){
    a = a !== undefined ? a : 1 
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log (soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//Valor padrao do es2015 = melhor forma de se fazer
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log (soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))