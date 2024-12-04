// CLASE 3: Ciclos e interacciones

// Actividad 1: El pizarrón

let cantidad = parseInt (prompt ("Decime un número"));
let texto = prompt ("Decime un texto");

for (let z = 0; z <= cantidad; z++) {
    alert (texto);
}

// CLASE 2: Control de flujos

// Actividad 5: Vacío

let solicitarProducto1 = prompt ("¿Que producto te vas a llevar?");
let solicitarProducto2 = prompt ("¿Que otro producto te vas a llevar?");
let solicitarProducto3 = prompt ("¿Que otro producto te vas a llevar?");
let solicitarProducto4 = prompt ("¿Que otro producto te vas a llevar?");

if ((solicitarProducto1 != "") && (solicitarProducto2 != "") && (solicitarProducto2 != "") && (solicitarProducto4 != "")) {
    console.log ("usted está llevando " +solicitarProducto1 +"," +solicitarProducto2+","+solicitarProducto3+" y una "+solicitarProducto4);
}
else {
    console.log ("Es necesario cargar todos los productos")
}




// Actividad 4 con switch, resolucion 2

let solicitarPresupuesto = parseInt (prompt ("Ingresa un presupuesto"));

switch (true) {
    case (solicitarPresupuesto <= 1000 && solicitarPresupuesto >= 0):
        alert ("Presupuesto bajo");
        break;
    case (solicitarPresupuesto >= 1001 && solicitarPresupuesto < 3000):
        alert ("Presupuesto medio");
        break;
    case (solicitarPresupuesto >= 3000):
        alert ("Presupuesto alto");
        break;
    default:
        alert ("Error al reconocer el presupuesto")
}

// Actividad 4: Solicitar al usuario 1 número

let solicitarNumeroNoe = prompt ("Solicitar numero");

if ((solicitarNumeroNoe <= 1000) && (solicitarNumeroNoe >= 0)) {
    console.log ("Presupuesto bajo");
}
else if ((solicitarNumeroNoe >= 1001) && (solicitarNumeroNoe < 3000)) {
    console.log ("Presupuesto medio");
}
else if (solicitarNumeroNoe >= 3000) {
    console.log ("Presupuesto alto");
}
else {
    console.log ("Error al reconocer el presupuesto")
}

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

// ACTIVIDAD 3: Elegir personaje
//Solicitar al usuario un (1) número.
//Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
// “Elegiste a Homero” si es 1.
// “Elegiste a Marge” si es 2.
// “Elegiste a Bart” si es 3.
// “Elegiste a Lisa” si es 4.

let solicitarNumero = parseInt (prompt ("Solicitar número"));

if (solicitarNumero === 1) {
    alert ("Elegiste a Homero");
}
else if (solicitarNumero == 2) {
    alert ("Elegiste a Marge");
}
else if (solicitarNumero == 3) {
    alert ("Elegiste a Bart");
}
else if (solicitarNumero == 4) {
    alert ("Elegiste a Lisa");
}
else {
    alert ("No elegiste ninguno");
}

// Actividad 3 con switch - resolución 2:

let solicitarNumeroSwitch = prompt ("Solicitar un Numero del 1 al 4");

switch (parseInt(solicitarNumeroSwitch)) {
    case 1:
        console.log ("Elegiste a Homero");
        break;
    case 2:
        console.log ("Elegiste a Marge");
        break;
    case 3:
        console.log ("Elegiste a Bart");
        break;
    case 4:
        console.log ("Elegiste a Lisa");
        break;
    default:
        console.log ("No elegiste ninguno de estos");
}






// Clase 3: Bucles
// HOJA 1

// Preguntas:

// 1. ¿Qué es un ciclo y cómo funciona en programación?
// Un ciclo es, en JavaScript, una estructura que permite repetir un bloque de código un número determinado de veces.

// 2. ¿Cuáles son los dos tipos de ciclos y cuál es la diferencia entre ambos?
// Los dos tipos de ciclos son:
// - Ciclo por contado: Utiliza la estructura for. Se ejecuta un número específico de veces.
// - Ciclo por condición: Utiliza while y do...while. Se ejecuta mientras una condición sea verdadera.

// 3. ¿Qué es el parseInt y qué hace?
// parseInt se utiliza para convertir un valor de tipo string a number.

// 4. ¿Qué es el prompt y qué hace?
// prompt es una función de JavaScript que muestra un mensaje en el navegador, permitiendo al usuario ingresar un valor que puede ser aceptado o cancelado.

// 5. ¿Qué hace la sentencia break y en qué se diferencia con continue?
// - break: Interrumpe un ciclo (for, while, do...while) cuando se cumple una condición.
// - continue: Omite la iteración actual de un ciclo y continúa con la siguiente, cuando se cumple una condición.

// 6. ¿Cuál es la diferencia entre while y do...while?
// - while: La condición se evalúa antes de ejecutar el bloque de código. Si la condición es falsa desde el principio, el bloque no se ejecuta.
// - do...while: La condición se evalúa después de ejecutar el bloque de código. El bloque se ejecuta al menos una vez, incluso si la condición es falsa.




// HOJA 3

// Preguntas

// 1. ¿Como se compone la estructura de un bucle?
// - Un bucle, ya sea while o for, se estructura de la siguiente manera: inicializador, condición e incrementador. Por ejemplo, en el inicializador podemos crear variables, y en el incrementador podemos asignar un nuevo valor a la variable o incluso incrementarla.






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