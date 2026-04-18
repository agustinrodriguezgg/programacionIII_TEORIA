/**
 * EJERCICIOS DE OBJETOS
 */

// Ejercicio 1
const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
};
console.log("Ejercicio 1 (Modelo del auto):", auto.modelo); 

// Ejercicio 2
let persona = {
    nombre: "Ana",
    edad: 25
};
persona.edad = 26;
persona.profesion = "Ingeniera";
console.log("Ejercicio 2 (Objeto persona modificado):", persona);

// Ejercicio 3
const libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    año: 1967
};
const { titulo, autor } = libro;
console.log("Ejercicio 3 (Título extraído):", titulo);
console.log("Ejercicio 3 (Autor extraído):", autor);

// Ejercicio 4
const alumnos = [
    { nombre: "Lucas", nota: 8 },
    { nombre: "Sofía", nota: 9 },
    { nombre: "Martín", nota: 7 }
];

let mejor = alumnos[0];
for (let alumno of alumnos) {
    if (alumno.nota > mejor.nota) {
        mejor = alumno;
    }
}
console.log("Ejercicio 4 (Mejor nota):", mejor.nombre);