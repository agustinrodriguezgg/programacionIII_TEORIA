/*
Ejercicio 5: Extraer una parte de un array
Crea un array colores con "rojo", "verde", "azul", "amarillo", 
"violeta". Usa slice para obtener un nuevo array con los elementos del 
índice 1 al 3 (sin incluir el 3) y muéstralo por consola.
*/
let colores = ["rojo","verde","azul","amarillo","violeta"];
let seleccion = colores.slice(1,3);
console.log(seleccion);