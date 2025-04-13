import { Recruitment } from "../classes/Recruitment";

export class RecruitmentService {
  private candidates: Recruitment[] = [];

  addCandidate(name: string, position: string, interviewDate: Date): void {
    try {
      const candidate = new Recruitment(name, position, interviewDate);
      this.candidates.push(candidate);
      console.log(`Candidato/a ${name} registrado/a para ${position}.`);
    } catch (error) {
      console.error("Error al registrar candidato:", error);
    }
  }

  hireCandidate(name: string): void {
    const candidate = this.candidates.find(c => c.candidateName === name);
    if (!candidate) throw new Error("Candidato no encontrado.");
    candidate.hired = true;
    console.log(`Candidato/a ${name} contratado/a.`);
  }

  getAll(): Recruitment[] {
    return this.candidates;
  }

  getHired(): Recruitment[] {
    return this.candidates.filter(c => c.hired);
  }
}
