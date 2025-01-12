// Código inicial (sin refactorizar)

class Notificador {
    enviarNotificacion(tipo, mensaje) {
        if (tipo === 'email') {
            console.log(`Enviando correo electrónico: ${mensaje}`);
            console.log('Añadiendo asunto al correo...');
        } else if (tipo === 'sms') {
            if (mensaje.length > 160) {
                console.log('Error: El mensaje SMS supera los 160 caracteres.');
            } else {
                console.log(`Enviando SMS: ${mensaje}`);
            }
        } else if (tipo === 'push') {
            console.log(`Enviando notificación push: ${mensaje}`);
        } else {
            console.log('Tipo de notificación no soportado.');
        }
    }
}

// Ejecución del código inicial
const notificador = new Notificador();
notificador.enviarNotificacion('email', 'Bienvenido a nuestra aplicación.');
notificador.enviarNotificacion('sms', 'Este es un mensaje de prueba.');
notificador.enviarNotificacion('push', 'Tienes una nueva alerta.');
notificador.enviarNotificacion('fax', 'Esto no debería ser posible.');
