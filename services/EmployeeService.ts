import { Employee } from "../classes/employee";
import { EmployeeData } from "../types/employeData";
import { Validator } from "../utils/validator";

export class EmployeeService {
  private employees: Employee[] = [];

  addEmployee(data: EmployeeData): void {
    try {
      Validator.validateString(data.name, "Nombre");
      Validator.validateString(data.lastName, "Apellido");
      if (!Validator.validateEmail(data.email)) throw new Error("Correo inválido.");
      if (!Validator.validatePhone(data.phone)) throw new Error("Teléfono inválido.");

      const employee = new Employee(
        data.id,
        data.name,
        data.lastName,
        data.email,
        data.phone,
        data.department,
        data.position
      );

      this.employees.push(employee);
      console.log(`Empleado agregado: ${employee.getFullName()}`);
    } catch (error) {
      console.error("Error al agregar empleado:", error);
    }
  }

  getAll(): Employee[] {
    return this.employees;
  }

  getById(id: string): Employee | undefined {
    return this.employees.find(e => e.id === id);
  }

  updateContact(id: string, email: string, phone: string): void {
    const employee = this.getById(id);
    if (!employee) throw new Error("Empleado no encontrado.");
    employee.updateContact(email, phone);
    console.log("Datos de contacto actualizados.");
  }

  removeEmployee(id: string): void {
    const index = this.employees.findIndex(e => e.id === id);
    if (index === -1) throw new Error("Empleado no encontrado.");
    this.employees.splice(index, 1);
    console.log("Empleado eliminado.");
  }
}
