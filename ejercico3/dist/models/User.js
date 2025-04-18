"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email, isCreator = false) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.isCreator = isCreator;
    }
}
exports.User = User;
