//throw 'meu erro'; // Imprime o que está escrito no valor do erro.
//throw 45 //se a linha acima não for comentada, a segunda linha não aparece.

//Aparentemente throw aceita qualquer valor para ser exibido.

let i = 0
while (i < 3) {
try{
    console.log('Iniciando calculadora')
    let input = 0
    if (input === 0){
        throw 'valor negado'
    }
    let res = 5/input
}catch(e){
    i++
}finally{
    console.log('Finalizando calculadora\n') // o \n pula uma linha
}

}