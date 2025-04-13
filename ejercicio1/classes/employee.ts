import { Department } from "../enums/Department";
import { Position } from "../enums/Position";

export class Employee {
  constructor(
    public readonly id: string,
    public name: string,
    public lastName: string,
    public email: string,
    public phone: string,
    public department: Department,
    public position: Position
  ) {
    this.validate();
  }

  private validate() {
    if (!this.name || !this.lastName) {
      throw new Error("El nombre y apellido son obligatorios.");
    }
    if (!this.email.includes("@")) {
      throw new Error("Correo electrónico inválido.");
    }
    if (!/^\d{8, 15}$/.test(this.phone)) {
      throw new Error("Número de teléfono debe tener 1' dígitos.");
    }
  }

  public getFullName(): string {
    return `${this.name} ${this.lastName}`;
  }

  public updateContact(email: string, phone: string): void {
    if (!email.includes("@") || !/^\d{8, 15}$/.test(phone)) {
      throw new Error("Datos de contacto inválidos.");
    }
    this.email = email;
    this.phone = phone;
  }
}
