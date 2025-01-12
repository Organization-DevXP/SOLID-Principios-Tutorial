# Práctica del Principio de Segregación de Interfaces (ISP)

## Descripción del ejercicio

En este ejercicio, trabajaremos con un sistema de dispositivos de impresión y escaneo. El objetivo es refactorizar el diseño para dividir responsabilidades en interfaces más específicas, cumpliendo con el principio ISP.

### Escenario

Actualmente, un dispositivo básico como una impresora debe implementar métodos relacionados con funciones que no soporta, como escaneo o envío de fax. Esto rompe el principio ISP y añade complejidad innecesaria.

## Instrucciones

1. Revisa el archivo [`ejercicio.js`](ejercicio.js) para identificar el problema actual.
2. Divide las responsabilidades en interfaces más pequeñas y específicas.
3. Refactoriza las clases para que implementen únicamente las interfaces necesarias.
4. (Opcional) Documenta el diseño refactorizado.

## Resultado esperado

Al finalizar, deberías tener:

- Clases que implementen interfaces relevantes y específicas.
- Un diseño modular que facilite la extensión y el mantenimiento.
- Eliminación de dependencias innecesarias en las clases.

## Recursos recomendados

- [Principio ISP en refactoring.guru](https://refactoring.guru/es/design-patterns)
- [SOLID: Segregación de Interfaces](https://en.wikipedia.org/wiki/Interface_segregation_principle)
