const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
// i++ é um incremento, ele vai adicionando 1 valor após o outro até chegar em 9, pois o valor é < 10

//Retornou 10 por ser um problema histórico do JS