

//Try/catch: podemos estourar um erro e tratar o erro.

let erroEncontrado = null
try {
    let obj = undefined
    console.log(obj)
    console.log(obj.propriedade) //Essa propriedade não existe em um objeto que recebe undefined
    console.log('Olá mundo!')
    erroEncontrado = false
} catch(erro) { //Catch é onde recebemos nosso erro
    console.log('[Erro]')
    console.log(erro)
    erroEncontrado = true
}finally{ // É o bloco de código executado logo após o catch
    erroEncontrado = null
    console.log ('Finalizar software')
}

console.log(erroEncontrado)