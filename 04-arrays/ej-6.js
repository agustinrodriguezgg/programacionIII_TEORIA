/*
Ejercicio 6: Recorrer un array y crear uno nuevo
Crea un array edades con los valores 10, 15, 20, 25. Usa map para 
crear un nuevo array llamado mayores que contenga true si la edad es 
mayor o igual a 18, y false si no. Muestra el resultado por consola.
*/
let edades = [10,15,20,25];
let mayores = edades.map(e => e >= 18);
console.log(mayores);