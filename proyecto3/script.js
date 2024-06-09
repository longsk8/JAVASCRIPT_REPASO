// Tipos de datos en JavaScript

/*
                NÚMEROS (int o float)
Las variables pueden almacenar números enteros y decimales.
En ambos casos, pueden ser positivos o negativos. Los números no se
escriben entre comillas.

let numero1 = 54;
let numero2 = 3.14;
let numero3 = -45;
let numero4 = -1.5;*/


/*               TEXTO (string)
Los textos siempre van entre comillas. Si un número lo ponemos entre comillas,
JavaScript lo tratará como texto y eso nos impedirá hacer operaciones matemáticas.

let miNombre = "Andres";
let miApellido = "Godoy";
*/
let miVariable;
miVariable = "buen dia";
console.log(miVariable);


/*           DATOS BOOLEANOS
Los datos booleanos solo pueden tener dos valores: true o false. Los booleanos
se utilizan para comprobar si una condición se cumple o no.

let tengoBarba = true;
let peloRubio = false;

*/
let numero = 5 < 4
console.log(numero) 
let numero2 = 5 > 4 
console.log(numero2)

/*           DATOS ARRAYS
Un array es un único objeto que contiene múltiples valores. También pueden contener valores
de diferentes tipos.

let miArray = [10, 20, 30];
let listaDeNombres = ["Andres", "Juana", "Milena"];
*/

let listaDeNombres = ["Andres", "Juana", "Milena",[100,200,300]];
// Muestra todo el array en la consola
console.log(listaDeNombres);
// Muestra el tercer elemento del array en la consola
console.log(listaDeNombres[2]); // "Milena"

// Muestra el tercer elemento del array anidado
console.log(listaDeNombres[3][1]); // 300


/*        OBJETOS
Un objeto es un pedazo de código que describe un objeto de la vida real. Por ejemplo,
un perro almacenado en una variable puede tener la raza, el nombre, el color, etc.

let miPerro = { raza: 'podenco', nombre: 'Luna', color: 'marrón' };
*/

let num1 = 12;
let num2 = 99;
let numer3 = num1 + num2;
console.log(numer3

)
// Declarar el array frutas
let frutas = ['manzanas', 'bananas', 'naranjas'];

// Declarar la variable dato2 y asignar el segundo elemento del array frutas
let dato2 = frutas[1];

// Mostrar el valor de dato2 en la consola
console.log(dato2); // Esto mostrará 'bananas'

