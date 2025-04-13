export class Attendance {
    constructor(
      public employeeId: string,
      public date: Date,
      public present: boolean
    ) {}
  
    public isAbsent(): boolean {
      return !this.present;
    }
  }
  