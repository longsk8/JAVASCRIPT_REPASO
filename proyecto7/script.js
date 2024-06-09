//variables
let tiempoRestante = 10; // Iniciar la cuenta regresiva desde 10
let elementoCronometro = document.getElementById("cronometro");
let elementoAudio = document.getElementById("audio");
let intervalo;//se usará para almacenar el identificador del intervalo de tiempo

function actualizarCronometro() {
    // Actualizar el contenido del elemento h1 con el tiempo restante
    elementoCronometro.textContent = tiempoRestante;
    tiempoRestante--; // Decrementar el tiempo restante en 1

    // Si el tiempo restante llega a 0, detener el intervalo
    if (tiempoRestante < 0) {
        clearInterval(intervalo);
        elementoCronometro.textContent = "¡Tiempo agotado!" //poner el audio de envez del mensaje;
        elementoAudio.play();
        
    }
}

function comenzarCronometro() {
    // Establecer el contenido inicial del cronómetro a 10
    elementoCronometro.textContent = tiempoRestante;
    // Usar setInterval para llamar a actualizarCronometro cada segundo
    intervalo = setInterval(actualizarCronometro, 1000);
}

// Llamar a la función comenzarCronometro para iniciar el cronómetro
comenzarCronometro();