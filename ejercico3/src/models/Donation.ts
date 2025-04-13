export class Donation {
  constructor(
    public id: string,
    public donorId: string,
    public projectId: string,
    public amount: number,
    public date: Date = new Date()
  ) {
    if (amount <= 0) throw new Error('La donación debe ser mayor a cero.');
  }
}
