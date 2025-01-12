# Práctica del Principio de Responsabilidad Única (SRP)

## Descripción del ejercicio

En este ejercicio, vamos a refactorizar una clase que no sigue el Principio de Responsabilidad Única (SRP). El objetivo es identificar las múltiples responsabilidades en el código y dividirlas en clases separadas, asegurándonos de que cada clase tenga una única responsabilidad.

### Escenario

Tenemos un sistema que gestiona la información de los estudiantes. Actualmente, hay una clase que:

1. Valida la información de los estudiantes.
2. Guarda los datos de los estudiantes en una base de datos.
3. Genera un reporte con la información de los estudiantes.

Tu tarea será separar estas responsabilidades en clases distintas.

---

## Instrucciones

1. Observa el código en el archivo [`example.js`](./example.js).
2. Identifica las responsabilidades múltiples en la clase proporcionada.
3. Refactoriza el código creando nuevas clases que cumplan con el SRP.
4. (Opcional) Añade comentarios al código refactorizado explicando tus decisiones.

---

## Resultado esperado

Al finalizar, deberías tener:

- Una clase encargada de la validación.
- Una clase encargada de guardar los datos.
- Una clase encargada de generar el reporte.

---

## Recursos recomendados

- Revisa el archivo [`Despues/ejemplo.js`](../Despues/ejemplo.js) para inspirarte con un ejemplo resuelto.
- Consulta los libros y recursos mencionados en el [README principal](../../README.md).
