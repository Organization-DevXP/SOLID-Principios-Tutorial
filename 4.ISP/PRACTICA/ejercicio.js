// Código inicial (antes de aplicar ISP)

// Interfaz general que incluye todos los métodos de notificación
class Notificador {
    enviarEmail(mensaje) {
        throw new Error("Método no implementado");
    }

    enviarSMS(mensaje) {
        throw new Error("Método no implementado");
    }

    enviarPush(mensaje) {
        throw new Error("Método no implementado");
    }
}

// Clase que solo soporta SMS, pero está obligada a implementar todo
class NotificadorSMS extends Notificador {
    enviarEmail(mensaje) {
        throw new Error("Este notificador no soporta email.");
    }

    enviarPush(mensaje) {
        throw new Error("Este notificador no soporta notificaciones push.");
    }

    enviarSMS(mensaje) {
        console.log(`Enviando SMS: ${mensaje}`);
    }
}

// Uso
const smsNotifier = new NotificadorSMS();
smsNotifier.enviarSMS("Hola, usuario!"); // Funciona
smsNotifier.enviarEmail("Hola, usuario!"); // Error: Este notificador no soporta email.
