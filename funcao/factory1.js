//A função Factory é uma função que retorna um novo objeto

// Factory Simples
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

