import { Payroll } from "../classes/payroll";
import { Validator } from "../utils/validator";

export class PayrollService {
  private payrollRecords: Payroll[] = [];

  generatePayroll(employeeId: string, baseSalary: number, bonuses: number, deductions: number): void {
    try {
      Validator.validatePositiveNumber(baseSalary, "Salario base");
      if (deductions < 0 || bonuses < 0) throw new Error("Bonos y deducciones no pueden ser negativos.");

      const payroll = new Payroll(employeeId, baseSalary, bonuses, deductions);
      this.payrollRecords.push(payroll);

      console.log(`Nómina generada para empleado ${employeeId}. Total: $${payroll.calculateTotal()}`);
    } catch (error) {
      console.error("Error al generar nómina:", error);
    }
  }

  getPayrolls(): Payroll[] {
    return this.payrollRecords;
  }

  getPayrollByEmployeeId(employeeId: string): Payroll[] {
    return this.payrollRecords.filter(p => p.employeeId === employeeId);
  }
}
