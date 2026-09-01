

let elementoAleatorio = document.getElementById("resultadoRandom");


function crearNumero(minimo, maximo) {
  

    maximo = maximo + 1;
    resultado = Math.floor(Math.random()* (maximo - minimo) + minimo)

    elementoAleatorio.textContent = resultado;
}