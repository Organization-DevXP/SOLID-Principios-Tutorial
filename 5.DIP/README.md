# Principio de Inversión de Dependencia (Dependency Inversion Principle - DIP)

## Definición

El **Principio de Inversión de Dependencia (DIP)** establece que:

1. Los módulos de alto nivel no deberían depender de los módulos de bajo nivel, ambos deben depender de abstracciones.
2. Las abstracciones no deben depender de los detalles; los detalles deben depender de las abstracciones.

Esto promueve un diseño flexible y desacoplado, facilitando cambios y mejoras sin afectar a todo el sistema.

### Ejemplo básico

Un sistema de notificaciones que depende directamente de una implementación específica (como correos electrónicos) en lugar de una abstracción.

## Problema

### Código sin DIP (antes):

Consulta el archivo [`Antes/example.js`](./Antes/example.
js).

```javascript
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
```

### Problema detectado:

1. La clase Notification depende directamente de la clase EmailService.
2. Si necesitamos cambiar el servicio (por ejemplo, usar SMS o notificaciones push), debemos modificar Notification.
3. Esto genera un diseño rígido y acoplado.

## Solución

Código con DIP (después):
Consulta el archivo [`Despues/example.js`](./Despues/
example.js).

```javascript
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
```

## Ventajas:

1. El módulo de alto nivel (Notification) no depende de implementaciones específicas.
2. Es fácil cambiar o agregar nuevos servicios sin modificar el código existente.
3. Mejora el mantenimiento y promueve la reutilización.
