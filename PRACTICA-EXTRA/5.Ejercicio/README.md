# Práctica de Múltiples Principios SOLID: SRP, OCP y ISP

## Descripción del ejercicio

### Escenario

Estás desarrollando un sistema de pagos para una tienda en línea. El sistema debe admitir múltiples métodos de pago, como tarjeta de crédito, PayPal y transferencia bancaria. Actualmente, la lógica de cálculo de comisiones y procesamiento de pagos está mezclada en una única clase, y agregar nuevos métodos de pago requiere modificar el código existente.

El diseño actual presenta los siguientes problemas:

1. Una clase con múltiples responsabilidades (violando SRP).
2. Cada vez que se agrega un nuevo método de pago, el código existente debe ser modificado (violando OCP).
3. La clase principal depende de métodos que algunos tipos de pago no usan (violando ISP).

## Instrucciones

1. Analiza el archivo `ejercicio.js` para identificar los problemas de diseño.
2. Refactoriza el código para:
   - Separar las responsabilidades de cálculo de comisiones y procesamiento de pagos (SRP).
   - Diseñar el sistema de forma que sea extensible para admitir nuevos métodos de pago sin modificar el código existente (OCP).
   - Implementar interfaces específicas para cada tipo de pago, asegurando que las clases no dependan de métodos que no necesitan (ISP).
3. Agrega un nuevo método de pago (por ejemplo, Criptomonedas) para probar la extensibilidad del sistema.

## Resultado esperado

Después de aplicar los principios SOLID:

- Las responsabilidades estarán claramente separadas.
- Nuevos métodos de pago podrán añadirse fácilmente sin modificar las clases existentes.
- Cada clase implementará solo los métodos relevantes para su funcionalidad específica.
