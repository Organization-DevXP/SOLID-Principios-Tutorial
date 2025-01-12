// Código inicial (sin aplicar SRP, OCP, ni DIP)

class Tienda {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    calcularTotal(descuento) {
        let total = this.productos.reduce((sum, prod) => sum + prod.precio, 0);
        return total - descuento; // Aplicar descuento directamente
    }

    generarReporte() {
        return this.productos.map(prod => `Producto: ${prod.nombre}, Precio: ${prod.precio}`).join('\n');
    }

    procesarPago(metodo) {
        if (metodo === 'tarjeta') {
            console.log('Procesando pago con tarjeta...');
        } else if (metodo === 'paypal') {
            console.log('Procesando pago con PayPal...');
        } else {
            console.log('Método de pago no soportado.');
        }
    }
}

// Ejecución del código inicial
const tienda = new Tienda();
tienda.agregarProducto({ nombre: 'Teclado', precio: 50 });
tienda.agregarProducto({ nombre: 'Mouse', precio: 25 });
console.log('Reporte de productos:');
console.log(tienda.generarReporte());
console.log('Total a pagar:', tienda.calcularTotal(10)); // Con descuento
tienda.procesarPago('paypal');
