
var a = new Array(10);
for (var i = 1; i <= 10; i++) {
    a[i] = Math.ceil(Math.random() * 100);
}

document.write("Los elementos del arreglo son:", '<BR/>');
for (var i = 1; i <= 10; i++) {
    document.write("Posición ", i, ": ", a[i], '<BR/>');
}
document.write("", '<BR/>');

document.write("En orden inverso:", '<BR/>');
for (var i = 10; i >= 1; i--) {
    document.write("Posición ", i, ": ", a[i], '<BR/>');
}