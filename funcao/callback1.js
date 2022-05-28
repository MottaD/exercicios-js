//Função CallBack = Chamar de volta
//Você passa uma função para outra função e quando determinado evento acontecer, essa função
//vai ser disparada e será chamada de volta. Pode ser chamada 1 ou várias vezes

const fabricantes = ["Mercedes", "Audi", "BMW", ]
function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function (fabricante){
    console.log(fabricante)//o param (fabricante) é cada um dos elementos do array
})
// ou:
fabricantes.forEach(fabricante => console.log(fabricante))