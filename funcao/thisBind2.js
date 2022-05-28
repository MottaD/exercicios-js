//setInterval dispara uma outra função a partir de um determinado intervalo que foi passado 
function Pessoa(){
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    } /*.bind(this)*/ ,1000 ) //1000 é o intervalo, a cada 1000 milisegundos essa função é disparada novamente
}

new Pessoa