export class Contract {
    constructor(
      public employeeId: string,
      public startDate: Date,
      public endDate: Date,
      public salary: number
    ) {
      this.validate();
    }
  
    private validate(): void {
      if (this.salary <= 0) {
        throw new Error("El salario debe ser mayor que cero.");
      }
      if (this.endDate <= this.startDate) {
        throw new Error("La fecha de finalización debe ser posterior a la de inicio.");
      }
    }
  
    public isActive(): boolean {
      const today = new Date();
      return today >= this.startDate && today <= this.endDate;
    }
  }
  