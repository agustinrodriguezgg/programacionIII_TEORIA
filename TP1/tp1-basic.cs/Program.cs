using System;

class Program
{
    // Función para calcular el promedio de 3 notas
    static double CalcularPromedio(double nota1, double nota2, double nota3)
    {
        return (nota1 + nota2 + nota3) / 3;
    }

    static void Main(string[] args)
    {
        // Pedir nombre del estudiante
        Console.Write("Ingresá el nombre del estudiante: ");
        string nombre = Console.ReadLine();

        // Pedir las 3 notas
        Console.Write("Ingresá la nota 1 (0-10): ");
        double nota1 = double.Parse(Console.ReadLine());

        Console.Write("Ingresá la nota 2 (0-10): ");
        double nota2 = double.Parse(Console.ReadLine());

        Console.Write("Ingresá la nota 3 (0-10): ");
        double nota3 = double.Parse(Console.ReadLine());

        // Calcular promedio usando la función
        double promedio = CalcularPromedio(nota1, nota2, nota3);

        // Determinar si aprueba o reprueba con if-else
        string resultado;
        if (promedio >= 6)
        {
            resultado = "aprobado/a";
        }
        else
        {
            resultado = "reprobado/a";
        }

        // Mostrar resultado final
        Console.WriteLine($"\n{nombre} tiene un promedio de {promedio:F2} y está {resultado}.");
    }
}