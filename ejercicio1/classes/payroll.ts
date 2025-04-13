export class Payroll {
    constructor(
      public employeeId: string,
      public baseSalary: number,
      public bonuses: number,
      public deductions: number
    ) {}
  
    public calculateTotal(): number {
      return this.baseSalary + this.bonuses - this.deductions;
    }
  }
  