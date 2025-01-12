# Práctica de Múltiples Principios SOLID: SRP, LSP y DIP

## Descripción del ejercicio

### Escenario

Estás desarrollando una aplicación para gestionar notificaciones en un sistema. El sistema soporta diferentes tipos de notificaciones, como correos electrónicos, SMS y notificaciones push. Actualmente, el código mezcla la lógica de envío con la lógica de creación y gestión de notificaciones, dificultando la extensión y el mantenimiento.

El diseño inicial presenta los siguientes problemas:

1. Una clase principal con múltiples responsabilidades (violando SRP).
2. No todos los tipos de notificaciones respetan el comportamiento esperado (violando LSP).
3. La dependencia en clases concretas en lugar de abstracciones dificulta la flexibilidad (violando DIP).

## Instrucciones

1. Analiza el archivo `ejercicio.js` para identificar las deficiencias de diseño.
2. Refactoriza el código para:
   - Separar las responsabilidades de creación, gestión y envío de notificaciones (SRP).
   - Asegurar que todos los tipos de notificaciones respeten el comportamiento esperado y puedan sustituirse sin problemas (LSP).
   - Implementar dependencias a través de abstracciones en lugar de clases concretas (DIP).
3. Agrega un nuevo tipo de notificación (por ejemplo, WhatsApp) para probar la extensibilidad del sistema.

## Resultado esperado

Después de aplicar los principios SOLID:

- Las clases estarán enfocadas en una sola responsabilidad.
- Los nuevos tipos de notificaciones podrán añadirse sin romper el comportamiento existente.
- El código dependerá de abstracciones, no de implementaciones concretas.
