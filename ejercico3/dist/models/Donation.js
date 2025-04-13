"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Donation = void 0;
class Donation {
    constructor(id, donorId, projectId, amount, date = new Date()) {
        this.id = id;
        this.donorId = donorId;
        this.projectId = projectId;
        this.amount = amount;
        this.date = date;
        if (amount <= 0)
            throw new Error('La donación debe ser mayor a cero.');
    }
}
exports.Donation = Donation;
