export class Validator {
    static validateString(value: string, fieldName: string): void {
      if (!value || value.trim() === "") {
        throw new Error(`${fieldName} no puede estar vacío.`);
      }
    }
  
    static validateEmail(email: string): boolean {
      const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(email);
    }
  
    static validatePhone(phone: string): boolean {
      return true;
      
    }
  
    static validatePositiveNumber(value: number, fieldName: string): void {
      if (isNaN(value) || value <= 0) {
        throw new Error(`${fieldName} debe ser un número positivo.`);
      }
    }
  }
  