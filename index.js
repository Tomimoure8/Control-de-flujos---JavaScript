// CLASE 3: Ciclos e interacciones

// Actividades:

// Actividad pag 3: Bucle infinito // Utiliza el valor booleano true para crear un bucle infinito (PENDIENTE).
let entradaa = "";

while (true) {
    entradaa = prompt ("Decime tu nombre");
    if (entradaa == 10) {
        break;
    }
}

// Actividad 4: El innombrable // Solicitar al usuario la carga de nombres de forma consecutiva, hasta que se ingrese “Voldemort”. //Luego realizar un única salida por alerta, con todos los nombres ingresados.

let cargarNombre = "";
let nombrecorrecto = "Voldemort";

while (nombrecorrecto != cargarNombre) {
    cargarNombre += prompt ("cual es el nombre correcto?") +"\n"
}
alert (cargarNombre);



// Actividad 3: Registro de productos // Solicitar al usuario la carga de cinco (5) productos de forma consecutiva. // Luego realizar una única salida por alerta, con el listado de productos registrados. // PostData: Este ejercicio me costó (volver a repetir la próx).

let productos = "";

for (let indice = 0; indice < 5; indice++) {
    productos += prompt ("cargame productos") +"\n"
}
alert ("Los productos cargados son:"+"\n"+productos);


// Actividad 3 // Intento 2:

let solicitarProducto = "";
for (let i = 0; i < 5; i++) {
    solicitarProducto += prompt ("solicitar producto") +"\n";
}
alert (solicitarProducto);



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

//Actividades:

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




// CLASE 3: Ciclos e interacciones

// HOJA 8

// Preguntas:

//1. ¿Qué es el ParseInt y que hace? 100

//2. ¿Qué es el Prompt y que hace? 100

//3. ¿Qué hace la sentencia break y en qué se diferencia con la continue? 100




// HOJA 7

// Preguntas:

//1. ¿En qué se diferencia el switch del if? Respuesta completa y ejemplo 100

//2. ¿Qué sucede si la condición del switch es verdadera? 100

//3. ¿Cuándo deja de ejecutarse el case? 100

//4. ¿Qué pasa si después de un case hay un return? 100
// • ¿Y si hay un return y un break? 100
// • ¿Y si hay un break pero no un return? Y si no hay ninguno de ambos? 100


//HOJA 6

// Preguntas:

//1. ¿Cómo se compone la estructura de un bucle? 100

//2. ¿Cómo se compone la estructura de un bucle for? 100



// HOJA 5

// Preguntas:

//1. ¿Cómo se compone la estructura de un bucle? 100

//2. ¿Cómo se compone la estructura de un bucle for? 100



// HOJA 4

// Preguntas:

//1. ¿Si queremos utilizar un valor booleano true para crear un bucle infinito, que es lo que debemos hacer?

//2. ¿Qué condición se utiliza si el contador comienza en 0 y queremos contar 10 veces? 100

//3. ¿Por qué el conteo de 10 veces termina en 9 cuando el contador comienza en 0? 100

//4. ¿Qué condición se utiliza si el contador comienza en 1 y queremos contar hasta 10? 100

//5. ¿Qué acción se asigna a la variable contador al realizar contador++? 100

//6. ¿Qué condición debe cumplirse para que el bucle se active? 100

//7. ¿Qué sucede con el valor del contador en cada iteración del bucle? 100

//8. ¿Por qué es importante incrementar el valor del contador en un bucle? 100

//9. ¿Qué podría ocurrir si no se incrementa el valor del contador en un bucle? 100



// HOJA 3

// Preguntas:

// 1. ¿Por qué en vez de colocar el prompt en la variable productos directamente, tenemos que saltar este paso y colocarlo dentro de la acción del bucle? 100

// 2. ¿Para qué sirve realmente el incremento, al menos en este caso? 100

// 3. ¿Cómo llamamos a este operador +=, para que lo utilizamos y porque no utilizamos el = en este ejercicio? 100  



// HOJA 2

// Preguntas

// 1. ¿Por qué el bucle do...while garantiza que el bloque de código se ejecute al menos una vez?

// 2. ¿Qué papel juega la condición en un bucle do...while y cuándo se evalúa?

//3. ¿Qué sucede con el valor del contador en cada iteración del bucle do...while?

//4. ¿Cómo se estructura un bucle do...while en JavaScript?

//5. ¿Qué podría ocurrir si no se incrementa el valor del contador dentro del bucle do...while?

//6. ¿Cómo se puede detener un bucle do...while antes de que la condición se vuelva falsa?

//7. ¿Qué acción realiza el siguiente código en cada iteración del bucle do...while?



// HOJA 1

// Preguntas

// 1. ¿Qué es un ciclo y cómo funciona en programación?

// 2. ¿Cuáles son los dos tipos de ciclos y cuál es la diferencia entre ambos? 

// 3. ¿Cuál es la diferencia entre el while y el do…while?


