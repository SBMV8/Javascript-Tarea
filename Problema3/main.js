function saludar() {
    document.write("Hola mundo!", '<BR/>');
}

function calculardoble(x) {
    var res;
    res = x * 2;
    return res;
}

function triplicar(x) {
    var resp;
    resp = x * 3;
    return resp;
}

var x;
document.write("Llamada a la funcion Saludar:", '<BR/>');
saludar();
document.write("Ingrese un valor numérico para x:", '<BR/>');
x = prompt();
document.write("Llamada a la función CalcularDoble (pasaje por valor)", '<BR/>');
document.write("El doble de ", x, " es ", calculardoble(x), '<BR/>');
document.write("El valor original de x es ", x, '<BR/>');
document.write("Llamada a la función Triplicar (pasaje por referencia)", '<BR/>');
document.write("El nuevo valor de x es ", triplicar(x), '<BR/>');
