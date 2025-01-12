class validateStudent {
    studentValidate(student) {
        if (!student.name || !student.age) {
            throw new Error("Información del estudiante incompleta.");
        }
        console.log("Estudiante validado.");
    }
}

class saveStudent {
    studentSave(student) {
        console.log(`Guardando al estudiante en la base de datos: ${student.name}`);
        // Aquí iría la lógica de conexión y guardado en la base de datos
    }
}

class generateStudentReport {
    studentReportGenerate(student) {
        console.log(`Generando reporte para el estudiante: ${student.name}`);
        return `Reporte: Nombre: ${student.name}, Edad: ${student.age}`;
    }
}

// Uso
const student = { name: "Juan", age: 20 };
// Instanciar las clases
const validate = new validateStudent()
const save = new saveStudent()
const generateReport = new generateStudentReport()

// Usar las clases correspondientes
validate.studentValidate(student)
save.studentSave(student)
const report = generateReport.studentReportGenerate(student);
console.log(report);
