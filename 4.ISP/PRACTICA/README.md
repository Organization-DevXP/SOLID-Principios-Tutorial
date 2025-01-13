# Práctica del Principio de Segregación de Interfaces (ISP)

## Descripción del ejercicio

En este ejercicio, trabajaremos con un sistema de notificaciones para usuarios que incluye múltiples canales, como email, SMS y notificaciones push. El objetivo es refactorizar el diseño para que cada clase implemente únicamente las interfaces que necesita, cumpliendo con el principio ISP.

### Escenario

Actualmente, una clase que solo envía notificaciones por SMS está obligada a implementar métodos relacionados con otros canales, como email o notificaciones push, aunque no los soporte. Esto genera un diseño rígido y difícil de mantener.

## Instrucciones

1. Revisa el archivo [`ejercicio.js`](ejercicio.js) para identificar las clases que violan el principio ISP.
2. Divide las responsabilidades en interfaces más específicas.
3. Refactoriza las clases para que implementen únicamente las interfaces que necesitan.
4. (Opcional) Añade un ejemplo práctico que demuestre el nuevo diseño funcionando correctamente.

## Resultado esperado

Al finalizar, deberías tener:

- Interfaces separadas para cada canal de notificación.
- Clases que implementen únicamente las interfaces necesarias.
- Código más modular y extensible, preparado para soportar nuevos canales de notificación.

## Recursos recomendados

- [Principio ISP en refactoring.guru](https://refactoring.guru/es/design-patterns)
- [SOLID: Segregación de Interfaces](https://en.wikipedia.org/wiki/Interface_segregation_principle)
