# Práctica del Principio de Abierto/Cerrado (OCP)

## Descripción del ejercicio

En este ejercicio, vamos a refactorizar un sistema que no cumple con el Principio de Abierto/Cerrado (OCP). El objetivo es reestructurar el código para que sea extensible sin necesidad de modificar las clases existentes.

### Escenario

Tenemos un sistema que calcula el área de diferentes figuras geométricas (círculos y rectángulos) utilizando una estructura condicional en una clase única.

## Instrucciones

1. Observa el código en el archivo [`ejercicio.js`](ejercicio.js).
2. Identifica las áreas donde el principio OCP no se está aplicando.
3. Refactoriza el código para que nuevas figuras geométricas puedan añadirse sin modificar las clases existentes.
4. (Opcional) Añade comentarios explicativos en tu solución.

## Resultado esperado

Al finalizar, deberías tener:

- Una clase independiente para cada figura geométrica.
- Un método `getArea()` en cada clase que calcule el área de forma individual.
- La eliminación de estructuras condicionales en el cálculo del área.

## Recursos recomendados

- [Patrones de diseño y OCP](https://refactoring.guru/design-patterns)
- [Principio de Abierto/Cerrado en Clean Code](<https://es.wikipedia.org/wiki/SOLID_(principios)>)
