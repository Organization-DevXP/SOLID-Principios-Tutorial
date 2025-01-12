# Práctica del Principio de Inversión de Dependencia (DIP)

## Descripción del ejercicio

En este ejercicio, trabajaremos con un sistema de notificaciones que actualmente depende de una implementación específica (correos electrónicos). El objetivo es refactorizar el código para que dependa de abstracciones, cumpliendo con el principio DIP.

### Escenario

La clase de notificaciones depende directamente de un servicio específico (por ejemplo, `EmailService`). Esto dificulta la extensión del sistema para soportar otros servicios como SMS o notificaciones push.

## Instrucciones

1. Revisa el archivo [`ejercicio.js`](ejercicio.js) para identificar el problema actual.
2. Diseña una abstracción (`NotificationService`) que represente un servicio de notificaciones genérico.
3. Refactoriza el sistema para usar la abstracción en lugar de depender directamente de implementaciones concretas.
4. Crea al menos dos implementaciones del servicio (por ejemplo, email y SMS).
5. Verifica que el sistema soporte nuevos servicios sin modificar el código existente.

## Resultado esperado

Al finalizar, deberías tener:

- Un sistema de notificaciones desacoplado, basado en abstracciones.
- Facilidad para agregar nuevos servicios de notificación.
- Un diseño que promueva la reutilización y la extensión.

## Recursos recomendados

- [Dependency Inversion Principle en refactoring.guru](https://refactoring.guru/es/design-patterns)
- [SOLID: Dependency Inversion Principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle)
