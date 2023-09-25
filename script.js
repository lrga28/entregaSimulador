var tipoDePasta = "";
var tipoDeSalsa = "";

function elegirTipoDePasta() {
    var entrada = prompt("Elija un tipo de pasta:\n1. Espagueti\n2. Fettuccine\n3. Penne");


    var opcion = parseInt(entrada);

    if (opcion === 1) {
        tipoDePasta = "Espagueti";
    } else if (opcion === 2) {
        tipoDePasta = "Fettuccine";
    } else if (opcion === 3) {
        tipoDePasta = "Penne";
    } else {
        alert("Opcion no valida. Seleccione una opcion valida.");
        return;
    }

    var entradaSalsa = prompt("Elija una salsa para " + tipoDePasta + ":\n1. Tomate\n2. Alfredo\n3. Pesto");

    var opcionSalsa = parseInt(entradaSalsa);

    if (opcionSalsa === 1) {
        tipoDeSalsa = "Tomate";
    } else if (opcionSalsa === 2) {
        tipoDeSalsa = "Alfredo";
    } else if (opcionSalsa === 3) {
        tipoDeSalsa = "Pesto";
    } else {
        alert("Opcion de salsa no valida. Seleccionada sin salsa.");
    }

    alert("Ha elegido " + tipoDePasta + " con salsa " + tipoDeSalsa + " pronto llegara a su mesa, buon appetito.");
}

// Ciclo interactivo
while (true) {
    var opcion = prompt("Seleccione una accion:\n1. Elegir tipo de pasta\n2. Salir");

    var seleccion = parseInt(opcion);

    if (seleccion === 1) {
        elegirTipoDePasta();
    } else if (seleccion === 2) {
        alert("Saliendo del simulador. Muchas gracias, vuelva pronto.");
        break;
    } else {
        alert("Opcion no valida. Seleccione una opcion valida.");
    }
}


