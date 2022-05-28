//Estrutura de controle: IF parte 2

function teste1(num) {
    if(num > 7)
        console.log(num) //Só esta sentença está associada ao if, para ter mais sentenças tem que usar {}
    
    //A sentença abaixo não tem ligação com IF
    console.log('Final') //Sempre será executada independente se o número é maior ou menor que 7
}

teste1(6)
teste1(8)

//Efeito de ; na estrutura de controle. Nesse código, o (;) desassociou o console.log de IF
function teste2(num) {
    if(num >7);  { //É uma estrutura de código vazia, o ideal é não usar ; em estrutura de controle
        console.log(num) 
    }
}

teste2(6)
teste2(8)