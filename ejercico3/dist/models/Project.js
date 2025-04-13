"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
class Project {
    constructor(id, title, description, category, goal, deadline, rewards, creator) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.goal = goal;
        this.deadline = deadline;
        this.rewards = rewards;
        this.creator = creator;
        this.donations = [];
        this.updates = [];
        this.comments = [];
        this.partialGoals = [];
    }
    addDonation(amount) {
        if (amount <= 0)
            throw new Error('El monto debe ser mayor a cero.');
        this.donations.push(amount);
    }
    addComment(comment) {
        this.comments.push(comment);
    }
    addUpdate(update) {
        this.updates.push(update);
    }
    setPartialGoals(goals) {
        this.partialGoals = goals;
    }
    checkReachedGoals() {
        const total = this.donations.reduce((a, b) => a + b, 0);
        return this.partialGoals.map(g => {
            return total >= g ? `✅ Meta parcial de $${g} alcanzada` : `❌ Meta parcial de $${g} no alcanzada`;
        });
    }
    getProgress() {
        const total = this.donations.reduce((acc, d) => acc + d, 0);
        return (total / this.goal) * 100;
    }
}
exports.Project = Project;
