// Código inicial (sin refactorizar)

class Pedido {
    constructor() {
        this.productos = [];
    }

    agregarProducto(nombre, precio, cantidad) {
        this.productos.push({ nombre, precio, cantidad });
    }

    calcularTotal() {
        return this.productos.reduce((total, producto) => {
            return total + producto.precio * producto.cantidad;
        }, 0);
    }

    procesarPago(metodoPago) {
        const total = this.calcularTotal();

        if (metodoPago === 'tarjeta') {
            console.log(`Procesando pago con tarjeta por $${total}...`);
        } else if (metodoPago === 'paypal') {
            console.log(`Procesando pago con PayPal por $${total}...`);
        } else if (metodoPago === 'transferencia') {
            console.log(`Procesando transferencia bancaria por $${total}...`);
        } else {
            console.log('Método de pago no soportado.');
        }
    }

    generarFactura() {
        console.log('Generando factura...');
        this.productos.forEach((producto) => {
            console.log(`${producto.cantidad}x ${producto.nombre} - $${producto.precio}`);
        });
        console.log(`Total: $${this.calcularTotal()}`);
    }

    enviarConfirmacion() {
        console.log('Enviando correo de confirmación...');
    }

    completarPedido(metodoPago) {
        this.procesarPago(metodoPago);
        this.generarFactura();
        this.enviarConfirmacion();
    }
}

// Ejecución del código inicial
const pedido = new Pedido();
pedido.agregarProducto('Camiseta', 20, 2);
pedido.agregarProducto('Pantalón', 50, 1);
pedido.completarPedido('paypal');
