export class Training {
    constructor(
      public employeeId: string,
      public topic: string,
      public date: Date,
      public completed: boolean
    ) {
      if (!topic) throw new Error("El tema de capacitación es obligatorio.");
    }
  }
  