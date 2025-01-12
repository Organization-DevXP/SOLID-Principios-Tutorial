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

// Uso
const printer = new BasicPrinter();
printer.print(); // Funciona.
printer.scan();  // Error: Esta impresora no soporta escaneo.
