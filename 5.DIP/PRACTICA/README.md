# Práctica del Principio de Inversión de Dependencias (DIP)

## Descripción del ejercicio

En este ejercicio, trabajaremos con un sistema de gestión de pagos. El objetivo es aplicar el principio de Inversión de Dependencias (DIP) para desacoplar la lógica de procesamiento de pagos de los métodos específicos de pago.

### Escenario

Actualmente, la clase `PaymentProcessor` está acoplada a una implementación específica de procesamiento de pagos (`CreditCardService`). Esto hace que sea difícil agregar nuevos métodos de pago como PayPal o criptomonedas sin modificar directamente la clase principal.

## Instrucciones

1. Revisa el archivo [`ejercicio.js`](ejercicio.js) para identificar las dependencias rígidas.
2. Refactoriza el diseño utilizando una abstracción para representar los métodos de pago.
3. Implementa al menos dos métodos de pago diferentes (por ejemplo, tarjeta de crédito y PayPal).
4. Modifica el código para que `PaymentProcessor` dependa de una interfaz en lugar de clases concretas.

## Resultado esperado

Al finalizar, deberías tener:

- Una interfaz que represente los métodos de pago.
- Clases concretas que implementen dicha interfaz para manejar diferentes métodos de pago.
- Una clase `PaymentProcessor` desacoplada de los detalles de implementación.

## Recursos recomendados

- [Principio DIP en refactoring.guru](https://refactoring.guru/es/design-patterns)
- [SOLID: Inversión de Dependencias](https://en.wikipedia.org/wiki/Dependency_inversion_principle)
