class EmailService {
    sendEmail(message) {
        console.log(`Enviando email: ${message}`);
    }
}

class Notification {
    constructor() {
        this.emailService = new EmailService();
    }

    sendNotification(message) {
        this.emailService.sendEmail(message);
    }
}

// Uso
const notification = new Notification();
notification.sendNotification("Hola, mundo!");
