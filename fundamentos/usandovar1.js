//ESCOPOS DE VAR:
//GLOBAL: Visivel na aplicação inteira (browser e não node)
//VAR NO ESCOPO DE FUNÇÃO.
{ 
    { 
        {
             { 
                 { //Essa variavel fica visivel fora do escopo porque não é uma function
                      var sera = 'será?' 
                      console.log(sera)
                 } 
             } 
        } 
    } 
}
console.log(sera)

//Bloco de código associado a uma função
function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local) //não funciona fora do escopo da função, o escopo está dentro do bloco


/*Precisamos fugir do escopo global, já que podemos acessar o valor de qualquer lugar e corre
risco de sobrescrever o valor */