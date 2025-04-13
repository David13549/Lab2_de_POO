"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsService = void 0;
class StatisticsService {
    getTotalCollected(project) {
        return project.donations.reduce((sum, val) => sum + val, 0);
    }
    getProgress(project) {
        return project.getProgress();
    }
}
exports.StatisticsService = StatisticsService;
