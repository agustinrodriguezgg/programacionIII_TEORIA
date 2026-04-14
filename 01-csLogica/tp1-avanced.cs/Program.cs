using System;
using System.Collections.Generic;

class Persona
{
    public string Nombre { get; set; }

    public Persona(string nombre)
    {
        Nombre = nombre;
    }

    public virtual string ObtenerInfo()
    {
        return $"Persona: {Nombre}";
    }
}

class Estudiante : Persona
{
    public double[] Notas { get; set; }

    public Estudiante(string nombre, double nota1, double nota2, double nota3)
        : base(nombre)
    {
        Notas = new double[] { nota1, nota2, nota3 };
    }

    public double CalcularPromedio()
    {
        double suma = 0;
        foreach (double nota in Notas)
            suma += nota;
        return suma / Notas.Length;
    }

    public override string ToString()
    {
        double promedio = CalcularPromedio();
        string resultado = promedio >= 6 ? "aprobado/a" : "reprobado/a";
        return $"{Nombre} tiene un promedio de {promedio:F2} y está {resultado}.";
    }

    public override string ObtenerInfo()
    {
        return $"Estudiante: {Nombre} | Notas: {string.Join(", ", Notas)}";
    }
}

class Program
{
    static double LeerNota(string mensaje)
    {
        double nota;
        while (true)
        {
            Console.Write(mensaje);
            string input = Console.ReadLine();

            if (!double.TryParse(input, out nota))
                Console.WriteLine("⚠️  Eso no es un número. Ingresá un valor entre 0 y 10.");
            else if (nota < 0 || nota > 10)
                Console.WriteLine("⚠️  La nota debe estar entre 0 y 10.");
            else
                return nota;
        }
    }

    static string LeerNombre(string mensaje)
    {
        while (true)
        {
            Console.Write(mensaje);
            string nombre = Console.ReadLine();

            if (string.IsNullOrWhiteSpace(nombre))
                Console.WriteLine("⚠️  El nombre no puede estar vacío.");
            else
                return nombre;
        }
    }

    // Función para preguntar si continuar (solo acepta 's' o 'n')
    static bool PreguntarSiContinua()
    {
        while (true)
        {
            Console.Write("\n¿Querés cargar otro alumno? (s/n): ");
            string respuesta = Console.ReadLine().Trim().ToLower();

            if (respuesta == "s") return true;
            else if (respuesta == "n") return false;
            else Console.WriteLine("⚠️  Ingresá 's' para sí o 'n' para no.");
        }
    }

    static void Main(string[] args)
    {
        List<Estudiante> estudiantes = new List<Estudiante>();
        int numero = 1;

        do
        {
            Console.WriteLine($"\n--- Alumno {numero} ---");

            string nombre = LeerNombre("Nombre: ");
            double nota1  = LeerNota("Nota 1 (0-10): ");
            double nota2  = LeerNota("Nota 2 (0-10): ");
            double nota3  = LeerNota("Nota 3 (0-10): ");

            estudiantes.Add(new Estudiante(nombre, nota1, nota2, nota3));
            numero++;

        } while (PreguntarSiContinua()); // Sigue mientras el usuario diga 's'

        Console.WriteLine("\n===== RESULTADOS =====");
        foreach (Estudiante e in estudiantes)
        {
            Console.WriteLine(e);
        }
    }
}