class ReportManager {
    generateReport(data) {
        // Lógica para generar el reporte
        console.log("Generando reporte...");
        return `Reporte generado con los datos: ${JSON.stringify(data)}`;
    }

    printReport(report) {
        // Lógica para imprimir el reporte
        console.log(`Imprimiendo reporte: ${report}`);
    }
}

// Uso
const manager = new ReportManager();
const report = manager.generateReport({ name: "John Doe", score: 95 });
manager.printReport(report);