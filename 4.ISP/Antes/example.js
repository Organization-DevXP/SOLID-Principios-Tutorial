class MultifunctionPrinter {
    print() {
        console.log("Imprimiendo documento...");
    }

    scan() {
        console.log("Escaneando documento...");
    }

    fax() {
        console.log("Enviando fax...");
    }
}

class BasicPrinter extends MultifunctionPrinter {
    fax() {
        throw new Error("Esta impresora no soporta fax.");
    }

    scan() {
        throw new Error("Esta impresora no soporta escaneo.");
    }
}

const printer = new BasicPrinter();
printer.fax(); // Error inesperado: Esta impresora no soporta fax.