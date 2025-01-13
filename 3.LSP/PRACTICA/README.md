# Ejercicio: Principio de Sustitución de Liskov (LSP)

## Descripción del ejercicio

En este ejercicio, trabajarás con clases relacionadas con figuras geométricas. El objetivo es garantizar que el **Principio de Sustitución de Liskov (LSP)** se cumpla, de manera que las subclases puedan sustituir a la clase base sin alterar el comportamiento esperado del programa.

### Escenario

Tienes una clase base `Figura` y dos subclases: `Cuadrado` y `Rectangulo`. El sistema actual tiene problemas al calcular el área de estas figuras debido a la implementación de las subclases.

## Instrucciones

1. Analiza el código inicial (`ejercicio.js`) y detecta los problemas relacionados con LSP.
2. Refactoriza el código para que todas las subclases cumplan con el principio de Liskov.
3. Prueba tu solución para asegurarte de que el cálculo de áreas es correcto para ambas figuras.

## Resultado esperado

- Todas las subclases respetan el comportamiento esperado de la clase base.
- El cálculo de áreas funciona correctamente para cualquier tipo de figura.

## Recursos recomendados

- [Principio LSP en refactoring.guru](https://refactoring.guru/es/design-patterns)
- [SOLID: Sustitución de Liskov](https://en.wikipedia.org/wiki/Liskov_substitution_principle)
