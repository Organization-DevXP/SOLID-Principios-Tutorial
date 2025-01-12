// Abstracción
class NotificationService {
    send(message) {
        throw new Error("Método no implementado");
    }
}

// Implementaciones concretas
class EmailService extends NotificationService {
    send(message) {
        console.log(`Enviando email: ${message}`);
    }
}

class SMSService extends NotificationService {
    send(message) {
        console.log(`Enviando SMS: ${message}`);
    }
}

// Módulo de alto nivel
class Notification {
    constructor(service) {
        this.service = service; // Dependencia inyectada
    }

    sendNotification(message) {
        this.service.send(message);
    }
}

// Uso
const emailService = new EmailService();
const smsService = new SMSService();

const emailNotification = new Notification(emailService);
emailNotification.sendNotification("Hola por email!");

const smsNotification = new Notification(smsService);
smsNotification.sendNotification("Hola por SMS!");
