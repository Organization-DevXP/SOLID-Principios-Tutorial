# Práctica de Diseño de Software: Gestión de Pedidos de un E-commerce

## Descripción del ejercicio

### Escenario

Eres el desarrollador principal de un sistema de e-commerce que maneja pedidos. Actualmente, el proceso de manejo de pedidos está centralizado en una única clase que realiza múltiples tareas, como calcular el precio total, procesar el pago, generar la factura, y enviar un correo de confirmación.

Tu objetivo es refactorizar el código para mejorar su mantenimiento y permitir la extensión futura del sistema. Además, el sistema debe soportar múltiples métodos de pago (tarjeta de crédito, PayPal, y transferencia bancaria).

## Instrucciones

1. Revisa el archivo `ejercicio.js` para identificar los problemas de diseño.
2. Refactoriza el código para separar responsabilidades, asegurando que cada clase o módulo tenga una función específica.
3. Implementa una estrategia para agregar fácilmente nuevos métodos de pago sin modificar el código existente.
4. Simula el proceso de un pedido que incluya al menos dos productos y utiliza diferentes métodos de pago.

## Resultado esperado

- Cada responsabilidad debe estar claramente separada en diferentes clases o módulos.
- La extensión del sistema (por ejemplo, agregar nuevos métodos de pago) debe ser sencilla.
- El sistema refactorizado debe ser claro, modular, y seguir los principios SOLID.
