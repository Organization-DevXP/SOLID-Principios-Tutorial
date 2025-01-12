# Práctica de Múltiples Principios SOLID: SRP, OCP y ISP

## Descripción del ejercicio

### Escenario

Estás desarrollando un sistema de gestión de pagos para una tienda online. El sistema debe manejar múltiples métodos de pago (como tarjetas de crédito, PayPal y criptomonedas). Además, el sistema debe generar un recibo detallado después de procesar un pago.

El diseño actual presenta varios problemas:

1. La clase principal tiene demasiadas responsabilidades (violando SRP).
2. No es extensible para nuevos métodos de pago (violando OCP).
3. La clase principal implementa interfaces demasiado amplias que no todos los métodos de pago necesitan (violando ISP).

## Instrucciones

1. Revisa el archivo `ejercicio.js` para identificar los problemas de diseño.
2. Refactoriza el código para:
   - Separar las responsabilidades en clases más pequeñas y específicas (SRP).
   - Asegurar que el sistema sea extensible para nuevos métodos de pago sin modificar el código existente (OCP).
   - Diseñar interfaces específicas para cada tipo de pago (ISP).
3. Agrega un nuevo método de pago (por ejemplo, transferencia bancaria) como parte de la refactorización.

## Resultado esperado

Después de aplicar los principios SOLID:

- Las responsabilidades estarán distribuidas adecuadamente entre clases específicas.
- Será posible agregar nuevos métodos de pago sin modificar las clases existentes.
- Cada clase o interfaz tendrá sólo los métodos necesarios para su propósito.
