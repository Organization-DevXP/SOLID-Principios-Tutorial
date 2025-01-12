# Práctica del Principio de Sustitución de Liskov (LSP)

## Descripción del ejercicio
En este ejercicio, trabajaremos con una jerarquía de herencia relacionada con tipos de cuentas bancarias. El objetivo es garantizar que las subclases puedan sustituir a la clase base sin alterar el comportamiento esperado.

### Escenario
El sistema tiene una clase `BankAccount` y subclases que representan tipos específicos de cuentas, como cuentas de ahorros y depósitos fijos. Actualmente, una de las subclases redefine métodos con comportamientos incompatibles, violando el principio LSP.

## Instrucciones
1. Revisa el archivo [`ejercicio.js`](ejercicio.js) para entender el problema actual.
2. Refactoriza el código para cumplir con el principio LSP.
3. Implementa una solución que permita extender el comportamiento de la clase base sin romper la funcionalidad existente.
4. (Opcional) Añade comentarios explicativos en tu código.

## Resultado esperado
Al finalizar, deberías tener:
- Subclases que extiendan la funcionalidad de la clase base sin alterar su comportamiento.
- Métodos consistentes y predecibles en todas las clases.
- Eliminación de violaciones del principio LSP.

## Recursos recomendados
- [Principio LSP en refactoring.guru](https://refactoring.guru/es/design-patterns)
- [SOLID: Sustitución de Liskov](https://en.wikipedia.org/wiki/Liskov_substitution_principle)