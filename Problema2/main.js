
var acum, dato, i, n, prom;

document.write("Ingresando datos para hallar el Promedio: ");
document.write('<BR/>');
document.write("Total de datos: ");
n = Number(prompt("Ingrese la cantidad de datos: "));
document.write(n, '<BR/>');

acum = 0;
for (i = 1; i <= n; i++) {
    document.write("Ingrese el dato ", i, ": ")
    dato = Number(prompt("Ingrese un numero: "));
    acum = acum + dato;
    document.write(dato, '<BR/>');
}
prom = acum / n;

document.write("El promedio es: ", prom, '<BR/>');
