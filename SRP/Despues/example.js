class ReportGenerator {
    generateReport(data) {
        // Lógica para generar el reporte
        console.log("Generando reporte...");
        return `Reporte generado con los datos: ${JSON.stringify(data)}`;
    }
}

class ReportPrinter {
    printReport(report) {
        // Lógica para imprimir el reporte
        console.log(`Imprimiendo reporte: ${report}`);
    }
}

// Uso
const generator = new ReportGenerator();
const printer = new ReportPrinter();

const report = generator.generateReport({ name: "John Doe", score: 95 });
printer.printReport(report);