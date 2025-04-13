"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
class Validator {
    static validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}
exports.Validator = Validator;
