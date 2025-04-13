import { Training } from "../classes/Trainng";
import { TrainingData } from "../types/TrainingData";

export class TrainingService {
  private trainings: Training[] = [];

  registerTraining(data: TrainingData): void {
    try {
      const training = new Training(data.employeeId, data.topic, data.date, data.completed);
      this.trainings.push(training);
      console.log(`Capacitación registrada para empleado ${data.employeeId}.`);
    } catch (error) {
      console.error("Error al registrar capacitación:", error);
    }
  }

  getAll(): Training[] {
    return this.trainings;
  }

  getByEmployeeId(employeeId: string): Training[] {
    return this.trainings.filter(t => t.employeeId === employeeId);
  }
}
