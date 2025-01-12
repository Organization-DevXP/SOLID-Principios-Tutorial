# Práctica de Múltiples Principios SOLID: SRP, OCP y DIP

## Descripción del ejercicio

### Escenario

Estás desarrollando un sistema para gestionar una tienda de productos en línea. Actualmente, el sistema tiene una clase principal que se encarga de manejar:

1. Los detalles de los productos.
2. El cálculo de precios (incluyendo descuentos).
3. La generación de reportes de ventas.
4. La comunicación con el sistema de pago.

Este diseño viola varios principios SOLID. Tu objetivo es identificar estos problemas y refactorizar el código para aplicar:

- **Principio de Responsabilidad Única (SRP)**: Cada clase debe encargarse de una sola responsabilidad.
- **Principio Abierto/Cerrado (OCP)**: El sistema debe ser extensible sin necesidad de modificar el código existente.
- **Principio de Inversión de Dependencias (DIP)**: Las clases deben depender de abstracciones y no de implementaciones concretas.

## Instrucciones

1. Revisa el archivo `ejercicio.js` para entender el código inicial.
2. Identifica las violaciones a los principios SOLID mencionados.
3. Refactoriza el código en clases separadas y aplica las abstracciones necesarias.
4. Asegúrate de que el sistema sea extensible para soportar nuevos métodos de pago o cálculos de precios sin modificar las clases existentes.

## Resultado esperado

Después de aplicar los principios SOLID:

- Cada clase tendrá una responsabilidad bien definida.
- El sistema será extensible para agregar nuevos métodos de pago o cálculos de precios sin modificar el código existente.
- Las dependencias estarán invertidas, promoviendo el uso de interfaces o abstracciones.
