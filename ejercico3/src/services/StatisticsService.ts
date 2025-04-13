import { Project } from '../models/Project';

export class StatisticsService {
  getTotalCollected(project: Project): number {
    return project.donations.reduce((sum, val) => sum + val, 0);
  }

  getProgress(project: Project): number {
    return project.getProgress();
  }
}
