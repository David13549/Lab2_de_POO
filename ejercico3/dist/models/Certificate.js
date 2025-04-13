"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Certificate = void 0;
class Certificate {
    constructor(donorName, projectTitle, amount, date) {
        this.donorName = donorName;
        this.projectTitle = projectTitle;
        this.amount = amount;
        this.date = date;
    }
    generateText() {
        return `Certificado de donación\n\nDonante: ${this.donorName}\nProyecto: ${this.projectTitle}\nMonto: $${this.amount}\nFecha: ${this.date.toLocaleDateString()}`;
    }
}
exports.Certificate = Certificate;
