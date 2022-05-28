//Destructuring: É um operador de desestruturação, tira da estrutura algum elemento. Novo recurso do ES2015
//Tem duas formas de escrita:
// - As chaves, para criar objeto
// - para criar o array, se usa o colchete

//Esse destructuring é dentro de objetos

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//O destructuring tira de dentro de uma estrutura o que você quer, ex:
//As chaves do exemplo abaixo, representam o operador destructuring

const { nome, idade } = pessoa //Tire de dentro de pessoa, nome e idade
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa //O valor padrão de bemHumorada será verdadeiro 
console.log(sobrenome, bemHumorada) //Valor de sobrenome undefined pq não foi definido

const { endereco: {logradouro, numero, cep}} = pessoa /* Extraiu de endereço os valores de logradouro
numero, cep(não existe), que estão na const de pessoa */
console.log(logradouro, numero, cep)

//Cuidado!!
//Não tentem acessar atributos que não existem de forma alinhada, ex:
//const { conta: {ag, num }} = pessoa //Não existe conta, ag e numero em pessoa, logo dará erro.

