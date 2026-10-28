// Ejercicio 1

let base = 27
let altura = 5
let area = base * altura

console.log(`Una base de ${base} y una altura de ${altura} da como resultado que el área del rectángulo es: ${area}`)

// Ejercicio 2

let num1 = 10
let num2 = -10
console.log(`\n¿${num1} es mayor a ${num2}? ${num1 > num2}`)

// Ejercicio 3

let esMayor = true
let esPar = false
console.log(`\n'esMayor && esPar' devuelve: ${esMayor && esPar}`) // && significa “y”. Para que dé true, las dos cosas tienen que ser verdaderas a la vez
console.log(`'esMayor || esPar' devuelve: ${esMayor || esPar}`) // || significa “o”. Basta con que una de las dos sea verdadera para que dé true.

// Ejercicio 4: Usar operadores de asignación para incrementar el valor de una variable en 5.

let valorNum = 100
valorNum += 5
console.log(`\nValor original: 100\nValor ahora incrementando la variable usando operadores de asignación: ${valorNum}`);

// Ejercicio 5: Escribir una expresión que verifique si un número es positivo y par

let numeroPrueba = 8
console.log(`\n¿${numeroPrueba} es positivo y par? ${numeroPrueba > 0 && numeroPrueba % 2 === 0}` ); 