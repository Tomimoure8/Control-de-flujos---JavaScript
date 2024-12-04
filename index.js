// CLASE 3: Ciclos e interacciones

// Actividad 4: El innombrable // Solicitar al usuario la carga de nombres de forma consecutiva, hasta que se ingrese “Voldemort”. //Luego realizar un única salida por alerta, con todos los nombres ingresados.

// let cargarNombre = "";
// let nombrecorrecto = "Voldemort";

// while (nombrecorrecto != cargarNombre) {
//     cargarNombre += prompt ("cual es el nombre correcto?") +"\n"
// }
// alert (cargarNombre);



// Actividad 3: Registro de productos // Solicitar al usuario la carga de cinco (5) productos de forma consecutiva. // Luego realizar una única salida por alerta, con el listado de productos registrados. // PostData: Este ejercicio me costó (volver a repetir la próx).

let productos = "";

for (let indice = 0; indice < 5; indice++) {
    productos += prompt ("cargame productos") +"\n"
}
alert ("Los productos cargados son:"+"\n"+productos);



// Actividad 2: El cuadrado ordinario // Solicitar al usuario un (1) número. // Emplear este valor para determinar la cantidad de repeticiones, y efectuar una salida por alerta con el mensaje “lado” en cada repetición. // Pero si se alcanza un número de iteraciones mayor que cuatro (4), cancelar el ciclo.

let solicNumero = prompt ("Decime un número");

for (let limite = 0; limite < solicNumero; limite++) {
    if (limite > 3) {
        break;
    }
    alert ("lado");
}



// Actividad 1: El pizarrón // Solicitar al usuario un (1) número y un (1) texto. // Efectuar una salida por alerta con el mensaje ingresado por cada repetición, hasta alcanzar el valor señalado por el usuario.

let cantidad = parseInt (prompt ("Decime un número"));
let texto = prompt ("Decime un texto");

for (let z = 0; z <= cantidad; z++) {
    alert (texto);
}




// CLASE 2: Control de flujos

// Actividad 5: Vacío // Solicitar al usuario cuatro (4) productos de almacén. // Si todos los elementos fueron cargados, realizar una única salida compuesta por el listado de productos. // Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.

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

// Actividad 4: Presupuesto // Solicitar al usuario un (1) número. // Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda: // - “Presupuesto bajo” si está entre 0 y 1000. // - “Presupuesto medio” si está entre 1001 y 3000. // - “Presupuesto alto” si es mayor que 3000.

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



// Actividad 3: Elegir personaje // Solicitar al usuario un (1) número. // Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: // - “Elegiste a Homero” si es 1. // - “Elegiste a Marge” si es 2. // - “Elegiste a Bart” si es 3. // - “Elegiste a Lisa” si es 4.

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



// Actividad 2: Presionar Y // Solicitar al usuario una (1) tecla. // Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. // Caso contrario, la salida será “Error”.

let yMinuscula = "y";
let yMayuscula = "Y";

let solicitarLetra = prompt ("Solicito una letra");

if ((solicitarLetra == yMinuscula) || (solicitarLetra == yMayuscula)) {
    alert ("Correcto")
}

else {
    alert ("Error")
};



// Actividad 1: Yo no fui - 29/11/2024 // Solicitar al usuario un (1) nombre. // Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. // Caso contrario, la salida será “Yo no fui”.

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




// CLASE 2: Control de flujos
// HOJA 1

// Preguntas:

// 1. ¿Qué es un condicional?
// Un condicional es una estructura sintáctica donde tomamos una decisión a partir de una condición.

// 2. ¿Qué es un control de flujo y qué se realiza en él? ¿Cómo se complementan los valores booleanos con este?
// En el control de flujo de un programa se realizan evaluaciones con valores booleanos en diferentes puntos del código para determinar la dirección que seguirá la ejecución del programa. Estas evaluaciones se basan en condiciones que pueden ser verdaderas o falsas, y en función de ello se toman decisiones sobre qué parte del código ejecutar a continuación.

// 3. ¿Qué es la estructura if y que sucede si la condición es verdadera o falsa?
// La estructura "if" es una de las más utilizadas en programación y se utiliza para evaluar una condición. Si la condición es verdadera, se ejecutan las instrucciones dentro del bloque "if". Si la condición es falsa, las instrucciones dentro del bloque "if" no se ejecutan y el programa continúa con las instrucciones siguientes.




// HOJA 2

// Preguntas

// 1. ¿Qué hace el operador && y el operador ||?
// - El operador && se utiliza para que, al emplear condiciones, la toma de decisiones dependa de una condición y de la otra. Es decir, ambas condiciones deben ser verdaderas. En cambio, el operador || se utiliza cuando necesitamos que una sea falsa y la otra verdadera, ya que es una condición *o* la otra.