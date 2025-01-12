# Práctica de Diseño de Software: Optimización de un Sistema de Notificaciones

## Descripción del ejercicio

### Escenario

Estás desarrollando un sistema de notificaciones para una aplicación que envía alertas por varios canales: correo electrónico, SMS y notificaciones push. Actualmente, todos los canales están implementados en una sola clase, y cualquier cambio o adición de un nuevo canal requiere modificar el código existente.

Además, algunos canales (como SMS) tienen limitaciones específicas, como la longitud máxima del mensaje, mientras que otros (como correo electrónico) requieren funcionalidades adicionales, como un asunto.

## Instrucciones

1. Analiza el archivo `ejercicio.js` y detecta los problemas de diseño.
2. Refactoriza el código para optimizar el sistema de notificaciones, asegurándote de que sea fácil de mantener y extender.
3. Agrega un nuevo canal de notificación (por ejemplo, Slack) como prueba de la extensibilidad del sistema.
4. Asegúrate de que cada canal gestione correctamente sus características particulares.

## Resultado esperado

- El sistema debe permitir agregar nuevos canales de notificación sin alterar el código existente.
- Cada canal de notificación debe manejar solo sus responsabilidades específicas.
- La implementación final debe ser modular y seguir buenas prácticas de diseño.
