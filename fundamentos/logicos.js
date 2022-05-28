function compras(trabalho1, trabalho2) { // trabalho1 e 2 são valores booleanos
    const comprarSorvete = trabalho1 || trabalho2// (||) significa que é operação do tipo OU
    const comprarTv50 = trabalho1 && trabalho2 // (&&) significa que é operação do tipo E
    //const comprarTv32 = !!(trabalho1 ^ trabalho2)// bitwase xor (operador Ou exclusivo)
    const comprarTv32 = trabalho1 != trabalho2 //Também para usar OU exclusivo
    const manterSaudavel = !comprarSorvete


    //Coloca direto o valor que cria automaticamente o objeto (chave/valor)
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } 
}

console.log(compras(true, true))
console.log(compras(true,false))
console.log(compras(false, true))
console.log(compras(false, false))

