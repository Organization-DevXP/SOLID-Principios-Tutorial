# Principio de Segregación de Interfaces (Interface Segregation Principle - ISP)

## Definición

El **Principio de Segregación de Interfaces (ISP)** establece que una clase no debe verse obligada a implementar interfaces que no utiliza. En lugar de diseñar interfaces grandes y genéricas, es mejor dividirlas en interfaces más pequeñas y específicas.

### Ejemplo básico

Un sistema de impresión con diferentes tipos de dispositivos (impresoras multifunción, impresoras básicas, etc.). Las interfaces mal diseñadas obligan a implementar métodos innecesarios.

## Problema

### Código sin ISP (antes):

Consulta el archivo [`Antes/example.js`](./Antes/example.
js).

```javascript
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
```

### Problema detectado:

1. La interfaz obliga a las clases a implementar métodos que no son relevantes para su funcionalidad.
2. Las clases que no necesitan ciertas capacidades deben lanzar errores o implementar métodos vacíos.
3. Esto genera complejidad innecesaria y rompe el principio ISP.

## Solución

Código con ISP (después):
Consulta el archivo [`Despues/example.js`](./Despues/
example.js).

```javascript
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
mfp.scan(); // Escaneando documento...
```

## Ventajas:

1. Divide las responsabilidades en interfaces más pequeñas y específicas.
2. Facilita la extensión de funcionalidad sin alterar las clases existentes.
3. Mejora la modularidad y el diseño del sistema.
