// CLASE 2: Control de flujos
// ACTIVIDAD 1: Yo no fui - 29/11/2024

let solicitarNombre = prompt ("solicito tu nombre");

let nombreAlmacenado = "Bart";
let nombreAlmacenadoDos = "Homero";
let nombreAlmacenadoTres = "Marge";

if (nombreAlmacenado == solicitarNombre) {
    alert ("Fui yo");
}

else if (solicitarNombre == nombreAlmacenadoDos) {
    alert ("Fui yo, Homero");
}

else if (solicitarNombre == nombreAlmacenadoTres) {
    alert ("Fui yo, marge");
}

else {
    alert ("Yo no fui");
};

// ¿Qué hace el operador && y el operador ||?
    // El operador && se utiliza para que, al emplear condiciones, la toma de decisiones dependa de una condición y de la otra. Es decir, ambas condiciones deben ser verdaderas. En cambio, el operador || se utiliza cuando necesitamos que una sea falsa y la otra verdadera, ya que es una condición *o* la otra.


// ACTIVIDAD 2: Presionar Y

let yMinuscula = "y";
let yMayuscula = "Y";

let solicitarLetra = prompt ("Solicito una letra");

if ((solicitarLetra == yMinuscula) || (solicitarLetra == yMayuscula)) {
    alert ("Correcto")
}

else {
    alert ("Error")
};


// Clase 3: Bucles

// Preguntas:
// 1.   ¿Qué es un ciclo y cómo funciona en programación?
//          Un ciclo es, en Js, un medio rápido (la estructura del código) para hacer que algo se repita un número determinado de veces.

// 2.	¿Cuáles son los dos tipos de ciclos y cuál es la diferencia entre ambos?
//          Los dos tipos de ciclos son el ciclo por contado, en el cual utilizamos la estructura for, y el ciclo por condición, en el que utilizamos while y do while. La diferencia entre ambos es que, mientras que el ciclo por condición se determina por la validez de una condición, el ciclo por contado no depende de una condición para activarse.






// let diaDeLaSemana = parseInt (prompt("Inserta un número del 1 al 7"));
// switch (diaDeLaSemana) {
//     case 1:
//         console.log ("Lunes");
//     case 2:
//         console.log ("martes");
//     case 3:
//         console.log ("miercoles");
//         break;
//     case 4:
//         console.log ("jueves");
//         break;
//     case 5:
//         console.log ("viernes");
//         break;
//     case 6:
//         console.log ("sabado");
//         break;
//     case 7:
//         console.log ("domingo");
//         break;
//     default:
//         console.log ("no clickeaste un número del 1 al 7");
// }



//
// let Insercion = prompt("Decime algun mes del año");
// switch (Insercion) {
//     case "enero":
//         console.log ("enebro");
//         break;
//     case "febrero":
//         console.log ("fiebre");
//         break;
//     case "marzo":
//         console.log ("mazo");
//         break;
//     case "abril":
//         console.log ("abrir");
//         break;
//     case "mayo":
//         console.log ("maya");
//         break;
//     case "junio":
//         console.log ("junco");
//         break;
//     case "julio":
//         console.log ("julio cesar");
//         break;
//     case "agosto":
//         console.log ("augusto cesar");
//         break;
//     case "septiembre":
//         console.log ("serpiente");
//         break;
//     case "octubre":
//         console.log ("octopus");
//         break;
//     case "noviembre":
//         console.log ("novia");
//         break;
//     case "diciembre":
//         console.log ("diciendo");
//         break;
// }


// CLASE 2 REPASO ****************************************************

// let messi = 10;
// if (messi < 10 || messi > 10) {
//     console.log ("A messi la 10 no le queda"); 
// }
// else if (messi === 9 && messi != 10) {
//     console.log ("messi juega de nueve, messi no es diez");
// }
// else if (messi === 10) {
//     console.log ("Efectivamente, messi es el 10");
// }
// else {
//     console.log ("x");
// }