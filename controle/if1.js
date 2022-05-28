//Estrutura de controle: IF. IF = SE no português

//Legenda do código: Se a nota for maior ou igual a 7 o código será executado
function soBoaNoticia (nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)
//Mostrou só o resultado do 8.1, quando a nota foi maior que 7


//Legenda: Só imprime no console se o valor for convertido para verdadeiro (true)
//Nesse contexto, mesmo que passe array, objeto, o JS entende que dentro de valor, tem que ser true/false
function seForVerdadeEuFalo (valor) {
    if (valor) {
        console.log('É verdade...' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0) //0 é o único número que é falso
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})
