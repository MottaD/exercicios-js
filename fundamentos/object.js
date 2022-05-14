//OBJECT é uma coleção de chaves e valores

const prod1 = {}; //Par de chaves é uma forma literal de escrever um objeto
prod1.nome = 'Celular Ultra Mega'; //Dentro do objeto tem um id chamado nome
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; //Notação colchete e espaço. Evitar atributos com espaço

console.log(prod1); //Imprimiu os valores de nome, preço e desconto

//Outra forma de declaração do objeto
const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90        
}

console.log(prod2)

