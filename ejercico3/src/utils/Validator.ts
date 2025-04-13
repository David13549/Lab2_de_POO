export class Validator {
    static validateEmail(email: string): boolean {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  }