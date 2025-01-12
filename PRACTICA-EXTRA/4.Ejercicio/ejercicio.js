// Código inicial (sin aplicar SRP, LSP ni DIP)

class Notificador {
    enviar(tipo, mensaje, destino) {
        if (tipo === 'email') {
            console.log(`Enviando correo a ${destino} con mensaje: "${mensaje}"`);
            // Lógica específica para enviar correos
        } else if (tipo === 'sms') {
            console.log(`Enviando SMS a ${destino} con mensaje: "${mensaje}"`);
            // Lógica específica para enviar SMS
        } else if (tipo === 'push') {
            console.log(`Enviando notificación push a ${destino} con mensaje: "${mensaje}"`);
            // Lógica específica para notificaciones push
        } else {
            console.log('Tipo de notificación no soportado.');
        }
    }
}

// Ejecución del código inicial
const notificador = new Notificador();
notificador.enviar('email', 'Hola, este es un mensaje de prueba.', 'correo@ejemplo.com');
notificador.enviar('sms', 'Este es un mensaje de prueba para SMS.', '+123456789');
notificador.enviar('push', '¡Tienes una nueva notificación!', 'usuario_app');
