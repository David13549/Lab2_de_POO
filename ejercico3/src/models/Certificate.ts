export class Certificate {
  constructor(
    public donorName: string,
    public projectTitle: string,
    public amount: number,
    public date: Date
  ) {}

  generateText(): string {
    return `Certificado de donación\n\nDonante: ${this.donorName}\nProyecto: ${this.projectTitle}\nMonto: $${this.amount}\nFecha: ${this.date.toLocaleDateString()}`;
  }
}
