# Single Responsibility Principle (SRP)

## Definición

El **Principio de Responsabilidad Única (SRP)** establece que una clase debe tener una única responsabilidad. En otras palabras, una clase debe estar encargada de realizar una única tarea o tener una única razón para cambiar.

### Ejemplo básico:

- **Incorrecto:** Una clase que maneja tanto la lógica de negocio como la presentación de datos.
- **Correcto:** Dividir esa clase en dos, cada una encargándose de una responsabilidad específica.

## Problema

Supongamos que estamos desarrollando un sistema de gestión de reportes. Tenemos una clase que genera un reporte y también lo imprime.

### Código sin SRP (antes):

Consulta el archivo [`Antes/example.js`](./Antes/example.js).

```javascript
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
```

### Problema detectado:

La clase ReportManager tiene dos responsabilidades: generar y imprimir reportes.
Cualquier cambio en la lógica de impresión puede afectar a la generación, y viceversa.

## Solución

Dividimos las responsabilidades en dos clases: una para generar el reporte y otra para manejar su impresión.

### Código con SRP (después):

Consulta el archivo [`Despues/example.js`](./Despues/example.js).

```javascript
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
```

### Ventajas:

1. Separa responsabilidades: Cada clase tiene una única razón para cambiar.
2. Reutilización: Podemos usar ReportPrinter para imprimir otros tipos de reportes sin cambiar su lógica.
3. Mantenibilidad: Los cambios en una clase no afectan a la otra.
