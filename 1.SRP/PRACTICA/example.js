class StudentManager {
    validateStudent(student) {
        if (!student.name || !student.age) {
            throw new Error("Información del estudiante incompleta.");
        }
        console.log("Estudiante validado.");
    }

    saveStudent(student) {
        console.log(`Guardando al estudiante en la base de datos: ${student.name}`);
        // Aquí iría la lógica de conexión y guardado en la base de datos
    }

    generateStudentReport(student) {
        console.log(`Generando reporte para el estudiante: ${student.name}`);
        return `Reporte: Nombre: ${student.name}, Edad: ${student.age}`;
    }
}

// Uso
const student = { name: "Juan", age: 20 };
const manager = new StudentManager();

manager.validateStudent(student);
manager.saveStudent(student);
const report = manager.generateStudentReport(student);
console.log(report);
