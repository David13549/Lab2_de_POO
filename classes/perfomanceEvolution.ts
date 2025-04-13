export class PerformanceEvaluation {
    constructor(
      public employeeId: string,
      public evaluator: string,
      public score: number,
      public date: Date,
      public comments?: string
    ) {
      if (score < 0 || score > 10) {
        throw new Error("La puntuación debe estar entre 0 y 10.");
      }
    }
  }
  