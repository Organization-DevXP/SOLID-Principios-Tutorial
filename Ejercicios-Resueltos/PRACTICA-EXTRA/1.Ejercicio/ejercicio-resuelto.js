// Clase Producto: Representa un producto individual
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Clase de Reporte: Se encarga de generar el reporte de productos
class Reporte {
    generarReporte(productos) {
        return productos.map(prod => `Producto: ${prod.nombre}, Precio: ${prod.precio}`).join('\n');
    }
}

// Clase de Cálculo de Total: Se encarga de calcular el total con descuentos
class CalculadorTotal {
    calcularTotal(productos, descuento) {
        let total = productos.reduce((sum, prod) => sum + prod.precio, 0);
        return total - descuento;
    }
}

// Interfaz de pago
class MetodoPago {
    procesarPago(cantidad) {
        throw new Error('Método de pago no implementado');
    }
}

// Implementación de pago con tarjeta
class PagoConTarjeta extends MetodoPago {
    procesarPago(cantidad) {
        console.log(`Procesando pago con tarjeta por $${cantidad}`);
    }
}

// Implementación de pago con PayPal
class PagoConPaypal extends MetodoPago {
    procesarPago(cantidad) {
        console.log(`Procesando pago con PayPal por $${cantidad}`);
    }
}

// Clase Tienda: Maneja solo los productos y delega las responsabilidades
class Tienda {
    constructor() {
        this.productos = [];
        this.reporte = new Reporte();
        this.calculador = new CalculadorTotal();
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    generarReporte() {
        return this.reporte.generarReporte(this.productos);
    }

    calcularTotal(descuento) {
        return this.calculador.calcularTotal(this.productos, descuento);
    }

    procesarPago(metodo, cantidad) {
        metodo.procesarPago(cantidad);
    }
}

// Ejecución del código refactorizado
const tienda = new Tienda();
tienda.agregarProducto(new Producto('Teclado', 50));
tienda.agregarProducto(new Producto('Mouse', 25));

console.log('Reporte de productos:');
console.log(tienda.generarReporte());

console.log('Total a pagar:', tienda.calcularTotal(10));

const metodoPago = new PagoConPaypal();
tienda.procesarPago(metodoPago, 65);
