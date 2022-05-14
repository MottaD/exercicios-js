var numero = 1
{
    var numero = 2 //sobrescreve o valor de 1
    console.log('dentro =', numero)
}
console.log('fora =', numero)

//As variáveis acima funcionaram porque foram definidas em escopos diferentes.