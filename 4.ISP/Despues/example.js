class Printer {
    print() {
        console.log("Imprimiendo documento...");
    }
}

class Scanner {
    scan() {
        console.log("Escaneando documento...");
    }
}

class MultifunctionPrinter {
    constructor(printer, scanner) {
        this.printer = printer;
        this.scanner = scanner;
    }

    print() {
        this.printer.print();
    }

    scan() {
        this.scanner.scan();
    }
}

const printer = new Printer();
const scanner = new Scanner();
const mfp = new MultifunctionPrinter(printer, scanner);

mfp.print(); // Imprimiendo documento...
mfp.scan();  // Escaneando documento...
