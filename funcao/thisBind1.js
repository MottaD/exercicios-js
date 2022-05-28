//THIS:
//É uma forma de referenciar o objeto atual daquela execução.
//O THIS pode variar de acordo com a função que é chamada
//This não vai variar se for uma função do tipo arrow

const pessoa = {
    saudacao : 'Bom dia!',
    falar() {
        console.log (this.saudacao)

    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcionais e objetos

const falardePessoa = pessoa.falar.bind(pessoa)// O bind você passa o objeto para resolver o this
falardePessoa()