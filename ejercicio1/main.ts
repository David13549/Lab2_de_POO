import * as readline from 'readline';
import { EmployeeService } from "./services/EmployeeService";
import { Department } from "./enums/Department";
import { Position } from "./enums/Position";

import { EmployeeData } from "./types/employeData";

// Instancia del servicio
const employeeService = new EmployeeService();

// Interfaz de entrada por consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.log("--- Sistema de Gestión de Recursos Humanos ---");
  console.log("1. Agregar empleado");
  console.log("2. Ver empleados");
  console.log("3. Actualizar contacto");
  console.log("4. Eliminar empleado");
  console.log("5. Salir");

  rl.question("Seleccione una opción: ", (opcion) => {
    switch (opcion) {
      case "1":
        agregarEmpleado();
        break;
      case "2":
        verEmpleados();
        break;
      case "3":
        actualizarContacto();
        break;
      case "4":
        eliminarEmpleado();
        break;
      case "5":
        console.log("Saliendo del sistema.");
        rl.close();
        break;
      default:
        console.log("Opción inválida.");
        mostrarMenu();
    }
  });
}

function agregarEmpleado() {
  rl.question("ID del empleado: ", (id) => {
    rl.question("Nombre: ", (name) => {
      rl.question("Apellido: ", (lastName) => {
        rl.question("Correo electrónico: ", (email) => {
          rl.question("Teléfono (10 dígitos): ", (phone) => {
            rl.question("Departamento (IT, HR, SALES, MARKETING, FINANCE, LOGISTICS): ", (dept) => {
              rl.question("Cargo (INTERN, ASSISTANT, ANALYST, MANAGER, DIRECTOR): ", (pos) => {
                const data: EmployeeData = {
                  id,
                  name,
                  lastName,
                  email,
                  phone,
                  department: Department[dept.toUpperCase() as keyof typeof Department],
                  position: Position[pos.toUpperCase() as keyof typeof Position]
                };

                employeeService.addEmployee(data);
                mostrarMenu();
              });
            });
          });
        });
      });
    });
  });
}

function verEmpleados() {
  const empleados = employeeService.getAll();
  if (empleados.length === 0) {
    console.log("No hay empleados registrados.");
  } else {
    empleados.forEach(e => {
      console.log(`ID: ${e.id}, Nombre: ${e.getFullName()}, Departamento: ${e.department}`);
    });
  }
  mostrarMenu();
}

function actualizarContacto() {
  rl.question("ID del empleado a actualizar: ", (id) => {
    rl.question("Nuevo correo electrónico: ", (email) => {
      rl.question("Nuevo teléfono: ", (phone) => {
        try {
          employeeService.updateContact(id, email, phone);
        } catch (error) {
          console.error("Error:", error);
        }
        mostrarMenu();
      });
    });
  });
}

function eliminarEmpleado() {
  rl.question("ID del empleado a eliminar: ", (id) => {
    try {
      employeeService.removeEmployee(id);
    } catch (error) {
      console.error("Error:", error);
    }
    mostrarMenu();
  });
}

// Iniciar el programa
mostrarMenu();
