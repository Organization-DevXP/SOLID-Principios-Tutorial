# Práctica de Múltiples Principios SOLID: LSP, OCP y DIP

## Descripción del ejercicio

### Escenario

Estás desarrollando un sistema para un parque de vehículos. El sistema debe manejar diferentes tipos de vehículos (como coches eléctricos, coches de gasolina y motocicletas). Cada vehículo puede calcular su consumo de combustible o electricidad en base a su tipo.

El código actual viola el Principio de Sustitución de Liskov (LSP) porque no permite tratar a todos los vehículos de forma uniforme. Además, no es extensible (OCP) para admitir nuevos tipos de vehículos sin modificar las clases existentes. Finalmente, no utiliza abstracciones adecuadas, incumpliendo el Principio de Inversión de Dependencias (DIP).

## Instrucciones

1. Revisa el archivo `ejercicio.js` para entender el diseño inicial.
2. Identifica las violaciones a los principios LSP, OCP y DIP.
3. Refactoriza el código para:
   - Asegurarte de que todos los vehículos puedan sustituirse entre sí sin causar errores.
   - Hacer que el sistema sea extensible para nuevos tipos de vehículos.
   - Invertir las dependencias utilizando interfaces o abstracciones.
4. Implementa al menos un nuevo tipo de vehículo como parte de la refactorización.

## Resultado esperado

Después de aplicar los principios SOLID:

- Todos los vehículos podrán ser tratados de forma uniforme mediante una abstracción común.
- El sistema será extensible para nuevos tipos de vehículos sin necesidad de modificar el código existente.
- Las dependencias estarán invertidas, promoviendo un diseño desacoplado.
