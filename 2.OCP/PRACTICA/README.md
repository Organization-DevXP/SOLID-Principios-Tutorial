# Práctica de Diseño de Software: Sistema de Envíos

## Descripción del ejercicio

### Escenario

Estás trabajando en un sistema de gestión de envíos para una tienda en línea. El sistema actual permite calcular los costos de envío para diferentes tipos de envíos: estándar, urgente y express. Sin embargo, el sistema está diseñado de manera que para agregar un nuevo tipo de envío, se deben modificar varias partes del código existente.

Tu tarea es refactorizar el código para que el sistema sea **abierto para extensión, pero cerrado para modificación**. Esto significa que debes poder agregar nuevos tipos de envíos sin modificar el código ya existente.

---

## Instrucciones

1. Revisa el archivo `ejercicio.js` para identificar el código que debe ser refactorizado.
2. Refactoriza el código para implementar el **Principio Abierto/Cerrado**. Crea una estructura que permita agregar nuevos tipos de envío sin cambiar el código existente.
3. Agrega al menos un nuevo tipo de envío al sistema y demuestra cómo funciona.

---

## Resultado esperado

- El sistema debe ser capaz de manejar diferentes tipos de envío sin modificar las clases existentes.
- Debes utilizar **polimorfismo** para manejar el cálculo de los costos de envío, haciendo que el sistema sea fácilmente extensible para futuros tipos de envío.
