
var op;

do {
    document.write("Menú de recomendaciones", '<BR/>');
    document.write("1. Literatura", '<BR/>');
    document.write("2. Cine", '<BR/>');
    document.write("3. Salir", '<BR/>');
    document.write("Elija una opción (1-3): ", '<BR/>');
    op = Number(prompt("Menú de recomendaciones\n1. Literatura\n2. Cine\n3. Salir\nElija una opción (1-3): "));
    switch (op) {
        case 1:
            document.write("Lecturas recomendables:", '<BR/>');
            document.write(" + Esperándolo a Tito y otros cuentos de fúbol (Eduardo Sacheri)", '<BR/>');
            break;
        case 2:
            document.write("Películas recomendables:", '<BR/>');
            break;
        case 3:
            document.write("Gracias, vuelva pronto", '<BR/>');
            break;
        default:
            document.write("Opción no válida", '<BR/>');
    }
    prompt("Presione enter para continuar");
} while (op != 3);
