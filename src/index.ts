/*El jardín infantil necesita un programa para poder asignar cursos a las aulas
• La aula Azul tiene 40 bancos, la Verde 35 y la Amarilla 30
• Dado un número de infantes ingresado por el usuario, el programa deberá
determinar el aula que minimice la cantidad de bancos vacíos
• La salida del algoritmo es el color que identifica al aula asignada

Ejemplo: si la cantidad de personas de un curso es 34, entonces
el aula a asignar será la Verde. El aula Amarilla no puede ser
asignada porque la cantidad de personas es menor a la cantidad
de bancos disponibles. El aula Azul es descartada porque quedan
más bancos inutilizados que en el aula Verde (6 versus 1)*/
let cantidadInfantes: number = Number(
  prompt("Ingrese la cantidad de infantes")
);

if (cantidadInfantes >= 1 && cantidadInfantes <= 30) {
  console.log(`El infante irá a la sala Amarilla`);
} else if (cantidadInfantes >= 31 && cantidadInfantes <= 35) {
  console.log(`El infante irá a la sala Verde`);
} else {
  console.log(`El infante irá a la sala Azul`);
}
