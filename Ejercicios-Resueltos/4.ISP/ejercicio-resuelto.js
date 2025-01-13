// Interfaces segregadas

// Interfaz para envío de correo electrónico
class NotificadorEmail {
    enviarEmail(mensaje) {
        throw new Error("Método no implementado");
    }
}

// Interfaz para envío de SMS
class NotificadorSMS {
    enviarSMS(mensaje) {
        throw new Error("Método no implementado");
    }
}

// Interfaz para envío de notificaciones push
class NotificadorPush {
    enviarPush(mensaje) {
        throw new Error("Método no implementado");
    }
}

// Clases que implementan solo las interfaces necesarias

class NotificadorSMSImpl extends NotificadorSMS {
    enviarSMS(mensaje) {
        console.log(`Enviando SMS: ${mensaje}`);
    }
}

class NotificadorEmailImpl extends NotificadorEmail {
    enviarEmail(mensaje) {
        console.log(`Enviando Email: ${mensaje}`);
    }
}

class NotificadorPushImpl extends NotificadorPush {
    enviarPush(mensaje) {
        console.log(`Enviando Push: ${mensaje}`);
    }
}

// Uso de las clases
const smsNotifier = new NotificadorSMSImpl();
smsNotifier.enviarSMS("Hola, usuario!"); // Funciona

// No existe un conflicto, ya que cada clase implementa solo lo necesario
const emailNotifier = new NotificadorEmailImpl();
emailNotifier.enviarEmail("Hola, usuario!");
