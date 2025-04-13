export class Recruitment {
    constructor(
      public candidateName: string,
      public appliedPosition: string,
      public interviewDate: Date,
      public hired: boolean = false
    ) {
      if (!candidateName || !appliedPosition) {
        throw new Error("Faltan datos obligatorios del candidato.");
      }
    }
  }
  