console.log(soma(3, 4))
//console.log(sub(3, 4)) (não funciona com sub expression e named tbm não funciona)

// function declaration
function soma(x, y){
    return x + y
}

// function expression
const sub = function (x, y){
    return x - y
}

// named function expression (forma pouco usada)
const mult = function mult (x , y){
    return x * y
}

