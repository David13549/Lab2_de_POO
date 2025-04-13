import { Project } from '../models/Project';
import { User } from '../models/User';

export class ProjectService {
  private projects: Project[] = [];

  createProject(project: Project) {
    this.projects.push(project);
  }

  findProjectById(id: string): Project | undefined {
    return this.projects.find(p => p.id === id);
  }

  listAllProjects(): Project[] {
    return this.projects;
  }
}