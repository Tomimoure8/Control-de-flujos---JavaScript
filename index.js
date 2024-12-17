// CLASE 3: Ciclos e interacciones

// Actividad pag 3: Bucle infinito // Utiliza el valor booleano true para crear un bucle infinito (PENDIENTE).

let contador = 0;

do {
    console.log ("" + contador);
    contador++
}
while (contador < 10);

// Actividad 4: El innombrable // Solicitar al usuario la carga de nombres de forma consecutiva, hasta que se ingrese “Voldemort”. //Luego realizar un única salida por alerta, con todos los nombres ingresados.

// let cargarNombre = "";
// let nombrecorrecto = "Voldemort";

// while (nombrecorrecto != cargarNombre) {
//     cargarNombre += prompt ("cual es el nombre correcto?") +"\n"
// }
// alert (cargarNombre);



// Actividad 3: Registro de productos // Solicitar al usuario la carga de cinco (5) productos de forma consecutiva. // Luego realizar una única salida por alerta, con el listado de productos registrados. // PostData: Este ejercicio me costó (volver a repetir la próx).

// let productos = "";

// for (let indice = 0; indice < 5; indice++) {
//     productos += prompt ("cargame productos") +"\n"
// }
// alert ("Los productos cargados son:"+"\n"+productos);


// Actividad 3 // Intento 2:

// let solicitarProducto = "";
// for (let i = 0; i < 5; i++) {
//     solicitarProducto += prompt ("solicitar producto") +"\n";
// }
// alert (solicitarProducto);



// Actividad 2: El cuadrado ordinario // Solicitar al usuario un (1) número. // Emplear este valor para determinar la cantidad de repeticiones, y efectuar una salida por alerta con el mensaje “lado” en cada repetición. // Pero si se alcanza un número de iteraciones mayor que cuatro (4), cancelar el ciclo.

// let solicNumero = prompt ("Decime un número");

// for (let limite = 0; limite < solicNumero; limite++) {
//     if (limite > 3) {
//         break;
//     }
//     alert ("lado");
// }



// Actividad 1: El pizarrón // Solicitar al usuario un (1) número y un (1) texto. // Efectuar una salida por alerta con el mensaje ingresado por cada repetición, hasta alcanzar el valor señalado por el usuario.

// let cantidad = parseInt (prompt ("Decime un número"));
// let texto = prompt ("Decime un texto");

// for (let z = 0; z <= cantidad; z++) {
//     alert (texto);
// }




// CLASE 2: Control de flujos

// Actividad 5: Vacío // Solicitar al usuario cuatro (4) productos de almacén. // Si todos los elementos fueron cargados, realizar una única salida compuesta por el listado de productos. // Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.

// let solicitarProducto1 = prompt ("¿Que producto te vas a llevar?");
// let solicitarProducto2 = prompt ("¿Que otro producto te vas a llevar?");
// let solicitarProducto3 = prompt ("¿Que otro producto te vas a llevar?");
// let solicitarProducto4 = prompt ("¿Que otro producto te vas a llevar?");

// if ((solicitarProducto1 != "") && (solicitarProducto2 != "") && (solicitarProducto2 != "") && (solicitarProducto4 != "")) {
//     console.log ("usted está llevando " +solicitarProducto1 +"," +solicitarProducto2+","+solicitarProducto3+" y una "+solicitarProducto4);
// }
// else {
//     console.log ("Es necesario cargar todos los productos")
// }



// Actividad 4 con switch, resolucion 2

// let solicitarPresupuesto = parseInt (prompt ("Ingresa un presupuesto"));

// switch (true) {
//     case (solicitarPresupuesto <= 1000 && solicitarPresupuesto >= 0):
//         alert ("Presupuesto bajo");
//         break;
//     case (solicitarPresupuesto >= 1001 && solicitarPresupuesto < 3000):
//         alert ("Presupuesto medio");
//         break;
//     case (solicitarPresupuesto >= 3000):
//         alert ("Presupuesto alto");
//         break;
//     default:
//         alert ("Error al reconocer el presupuesto")
// }

// Actividad 4: Presupuesto // Solicitar al usuario un (1) número. // Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda: // - “Presupuesto bajo” si está entre 0 y 1000. // - “Presupuesto medio” si está entre 1001 y 3000. // - “Presupuesto alto” si es mayor que 3000.

// let solicitarNumeroNoe = prompt ("Solicitar numero");

// if ((solicitarNumeroNoe <= 1000) && (solicitarNumeroNoe >= 0)) {
//     console.log ("Presupuesto bajo");
// }
// else if ((solicitarNumeroNoe >= 1001) && (solicitarNumeroNoe < 3000)) {
//     console.log ("Presupuesto medio");
// }
// else if (solicitarNumeroNoe >= 3000) {
//     console.log ("Presupuesto alto");
// }
// else {
//     console.log ("Error al reconocer el presupuesto")
// }



// Actividad 3: Elegir personaje // Solicitar al usuario un (1) número. // Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: // - “Elegiste a Homero” si es 1. // - “Elegiste a Marge” si es 2. // - “Elegiste a Bart” si es 3. // - “Elegiste a Lisa” si es 4.

// let solicitarNumero = parseInt (prompt ("Solicitar número"));

// if (solicitarNumero === 1) {
//     alert ("Elegiste a Homero");
// }
// else if (solicitarNumero == 2) {
//     alert ("Elegiste a Marge");
// }
// else if (solicitarNumero == 3) {
//     alert ("Elegiste a Bart");
// }
// else if (solicitarNumero == 4) {
//     alert ("Elegiste a Lisa");
// }
// else {
//     alert ("No elegiste ninguno");
// }

// Actividad 3 con switch - resolución 2:

// let solicitarNumeroSwitch = prompt ("Solicitar un Numero del 1 al 4");

// switch (parseInt(solicitarNumeroSwitch)) {
//     case 1:
//         console.log ("Elegiste a Homero");
//         break;
//     case 2:
//         console.log ("Elegiste a Marge");
//         break;
//     case 3:
//         console.log ("Elegiste a Bart");
//         break;
//     case 4:
//         console.log ("Elegiste a Lisa");
//         break;
//     default:
//         console.log ("No elegiste ninguno de estos");
// }



// Actividad 2: Presionar Y // Solicitar al usuario una (1) tecla. // Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. // Caso contrario, la salida será “Error”.

// let yMinuscula = "y";
// let yMayuscula = "Y";

// let solicitarLetra = prompt ("Solicito una letra");

// if ((solicitarLetra == yMinuscula) || (solicitarLetra == yMayuscula)) {
//     alert ("Correcto")
// }

// else {
//     alert ("Error")
// };



// Actividad 1: Yo no fui - 29/11/2024 // Solicitar al usuario un (1) nombre. // Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. // Caso contrario, la salida será “Yo no fui”.

// let solicitarNombre = prompt ("solicito tu nombre");

// let nombreAlmacenado = "Bart";
// let nombreAlmacenadoDos = "Homero";
// let nombreAlmacenadoTres = "Marge";

// if (nombreAlmacenado == solicitarNombre) {
//     alert ("Fui yo");
// }

// else if (solicitarNombre == nombreAlmacenadoDos) {
//     alert ("Fui yo, Homero");
// }

// else if (solicitarNombre == nombreAlmacenadoTres) {
//     alert ("Fui yo, marge");
// }

// else {
//     alert ("Yo no fui");
// };






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



// HOJA 2

// Preguntas:

// 1. ¿Cómo llamamos a esto ''; y para que la usamos así?
// En JavaScript, una cadena de texto vacía se representa como "" o ''. Es útil cuando necesitas declarar una variable que sabes que contendrá texto, pero aún no sabes cuál será ese texto.

// 2. ¿Cómo llamamos a esto \n y para que la usamos?
// Como lo dice el nombre, utilizamos el salto de línea para colocar una línea de código por debajo de otra. Por ejemplo: \n

// 3. ¿Cómo llamamos a este operador += y para que lo utilizamos?
// Con el operador de asignación y acumulación le estamos dando un valor a la variable que se irá sumando.

// 4. ¿En qué se diferencia el switch del if?
// El switch es como el if, con la diferencia (además de la sintaxis) de que se utiliza para comparar múltiples condiciones de una misma variable. En cambio, el if se puede utilizar para el uso de más de una variable.

// 5. ¿Qué sucede si la condición del switch es verdadera?
// Si la condición es verdadera, las instrucciones van a ejecutarse dentro del case. En la analogía de la heladería, si eliges un sabor de helado específico (como el chocolate), el empleado del switch sabe exactamente qué hacer: te da el helado de chocolate. No necesita seguir comprobando más condiciones después de eso. El proceso se detiene ahí.

// 6. ¿Cuándo deja de ejecutarse el case?
// En JavaScript, dentro de una estructura switch, cada case se ejecuta hasta que encuentra una declaración break, return, o hasta que se acaba el bloque de código.

// 7. ¿Qué pasa si después de un case hay un return? Y si hay un return y un break? Y si hay un break pero no un return? Y si no hay ninguno de ambos?
// Si después de un case hay un return, no es necesario un break, ya que return termina la ejecución de la función completa, no solo del switch. Esto significa que el return sale de la función y vuelve al punto desde donde se llamó.
// Por otro lado, si no hay un return ni un break después de un case, entonces se ejecutarán los case siguientes uno tras otro hasta que encuentre un break o hasta que se acabe el bloque de código.
// En una declaración switch, si ninguno de los case coincide con la expresión o variable evaluada, se ejecutará el bloque de código dentro de default, similar a cómo se ejecuta el bloque de código dentro de else en una declaración if cuando ninguna de las condiciones if o else if anteriores es verdadera.



// HOJA 3

// Preguntas:

// 1. ¿Por qué en vez de colocar el prompt en la variable productos directamente, tenemos que saltar este paso y colocarlo dentro de la acción del bucle?
// Si colocamos el prompt por fuera, lo que hacemos es utilizarlo una sola vez. Sin embargo, si necesitamos registrar productos, requerimos que el prompt nos pregunte 5 veces, y esto sucede si lo colocamos dentro del bucle.


// 2. ¿Cómo se compone la estructura de un bucle?
// Un bucle, ya sea while o for, se estructura de la siguiente manera: inicializador, condición e incrementador. Por ejemplo, en el inicializador podemos crear variables, y en el incrementador podemos asignar un nuevo valor a la variable o incluso incrementarla. 
// for (let z = 0; z < 10; z++) { 
//     console.log ("Ciclo numérico " + z);
// }
// // inicializador let z = 0; // condición z < 10; // incremento z++
// Las instrucciones se ejecutan luego del condicional y antes del incremento 

// 3. ¿Tanto en el while como en el for la estructura es igual?
// Sí, tanto en el while como en el for, la estructura básica incluye un inicializador, una condición y un incrementador. La diferencia principal es cómo se expresan estas partes en cada tipo de bucle.

// 4. ¿Cómo funciona la estructura en el do while?
// La estructura do...while se ejecuta al menos una vez, ya que la condición se evalúa después de ejecutar el bloque de código. Si la condición es verdadera, el bucle continúa ejecutándose; si es falsa, el bucle se detiene.



// HOJA 5 (analizando la actividad 3 // Clase 3)

// Preguntas:

// 1. ¿Por qué en vez de colocar el prompt en la variable productos directamente, tenemos que saltar este paso y colocarlo dentro de la acción del bucle?
// Si colocamos el prompt por fuera, lo que hacemos es utilizarlo una sola vez. Sin embargo, si necesitamos registrar productos, requerimos que el prompt nos pregunte 5 veces, y esto sucede si lo colocamos dentro del bucle.

// 2. ¿Para qué sirve realmente el incremento, al menos en este caso?
// El incremento, junto con la condición, determinará la cantidad de veces que el bucle se repetirá, y gracias a que hacemos que se repita 5 veces, el prompt (la acción dentro) se repite 5 veces.

// 3. ¿Cómo llamamos a este operador +=, para que lo utilizamos y porque no utilizamos el = en este ejercicio?
// Este operador += suma (o concatena, en el caso de cadenas de texto) el nuevo valor al valor existente de la variable. En tu código, productos += prompt("cargame productos") + "\n" agrega cada nuevo producto ingresado a la lista de productos, separándolos con un salto de línea \n. Al final del bucle, productos contendrá todos los productos ingresados, uno debajo del otro. En cambio, Si usas productos = prompt("cargame productos"), cada vez que el bucle se ejecuta, el valor anterior de productos se sobrescribe con el nuevo valor ingresado por el usuario. Al final del bucle, productos solo contendría el último valor ingresado.




// CLASE 2: Control de flujos
// HOJA 1

// Preguntas:

// 1. ¿Qué es un condicional?
// Un condicional es una estructura sintáctica donde tomamos una decisión a partir de una condición.

// 2. ¿Qué es un control de flujo y qué se realiza en él? ¿Cómo se complementan los valores booleanos con este?
// En el control de flujo de un programa se realizan evaluaciones con valores booleanos en diferentes puntos del código para determinar la dirección que seguirá la ejecución del programa. Estas evaluaciones se basan en condiciones que pueden ser verdaderas o falsas, y en función de ello se toman decisiones sobre qué parte del código ejecutar a continuación.

// 3. ¿Qué es la estructura if y que sucede si la condición es verdadera o falsa?
// La estructura "if" es una de las más utilizadas en programación y se utiliza para evaluar una condición. Si la condición es verdadera, se ejecutan las instrucciones dentro del bloque "if". Si la condición es falsa, las instrucciones dentro del bloque "if" no se ejecutan y el programa continúa con las instrucciones siguientes.

// 4. ¿Cuál es la diferencia entre el operador de asignación y el operador de comparación?
// El operador de asignación "=" se utiliza para asignar un valor a una variable, mientras que el operador de comparación "==" se utiliza para comparar dos valores y verificar si son iguales, principalmente en estructuras condicionales como "if".

// 5. ¿Qué es la estructura else y en qué se diferencia con if?
// Como sabemos, si las instrucciones son verdaderas se ejecutan, en cambio, si las instrucciones son falsas se pasa a la siguiente instrucción, la else.

// 6. ¿Qué es la estructura else if y en qué se diferencia con la else?
// El else if (sino) se ejecuta siempre antes del else. Siempre que vayamos a utilizarlo es importante que vaya antes del else porque no es una condición, sino una forma de evaluar múltiples condiciones en secuencia en cambio el else es el caso por defecto que se ejecuta. Aunque, cabe destacar que un else if puede ser verdadero, y si es verdadero entonces el else no pasa a ejecutarse porque antes se ejecutó un else if.



// HOJA 2

// Preguntas

// 1. ¿Qué hace el operador && y el operador ||? // El operador && (y) tiene como requisito que ambas condiciones sean verdaderas para que el bloque de código se ejecute. // const numero1 = 7; // const numero2 = 6; // if (numero1 > 5 && numero2 > 5) { // console.log("Ambos números son mayores que 5."); // } else { // console.log("Al menos uno de los números no es mayor que 5."); // } // El operador || (or) en cambio, tiene que tener un operador positivo y otro negativo para que el bloque de código se ejecute.