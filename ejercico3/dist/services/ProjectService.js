"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
class ProjectService {
    constructor() {
        this.projects = [];
    }
    createProject(project) {
        this.projects.push(project);
    }
    findProjectById(id) {
        return this.projects.find(p => p.id === id);
    }
    listAllProjects() {
        return this.projects;
    }
}
exports.ProjectService = ProjectService;
