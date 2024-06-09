

// funciton para saludar al usuario

// function saludarUsuario(){
//     // dar un alerta al usuario con el nombre a traves de el id + su valor
//     alert("Hola " + document.getElementById("nombreUsuario").value)
// }

//mismo ejercicio pero con variables
// funcion saludar al usuario
function saludarUsuario(){
    // creo una variable , cojo el elemento del input a traves de su id para mostrarlo en aler al usuario dar click
    let nombre = document.getElementById("nombreUsuario").value
    alert("Hola de nuevo " + nombre)
}