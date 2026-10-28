// Ejercicio #1

console.log("Ejercicio 1: Mostrar ciudad y su tipo de dato.")
let ciudad = "Medellín";  // Declarar variable ciudad
console.log(typeof ciudad, ciudad, "\n");  // "typeof" muestra el tipo de dato de la variable declarada.

// Ejercicio #2

console.log("Ejercicio 2: Mostrar precio y si el descuento está activo + tipos de de dato.")
let precio = 99.99;
let descuento = true;
console.log(precio + ":", typeof precio + ",", descuento + ":", typeof descuento)

// Ejercicio 3

console.log(`\nEjercicio 3: Declarar una variable sin asignarle valor y verificar su tipo.\n`)

let auto;
console.log(`Variable: auto\nTipo de dato de la variable: ${typeof auto}`)

// Ejercicio 4

console.log(`\nEjercicio 4: Usar 'Symbol' para crear un identificador único y comprobar su tipo.\n`)

let id = Symbol("id")
console.log(`Variable: id\nTipo de dato de 'id': ${typeof id}`)