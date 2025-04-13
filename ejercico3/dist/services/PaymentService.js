"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const Certificate_1 = require("../models/Certificate");
class PaymentService {
    constructor() {
        this.donations = [];
    }
    donate(donation, project) {
        project.addDonation(donation.amount);
        this.donations.push(donation);
        return new Certificate_1.Certificate(donation.donorId, project.title, donation.amount, donation.date);
    }
}
exports.PaymentService = PaymentService;
