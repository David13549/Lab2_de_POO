import { User } from './User';

export type Category = 'tecnológico' | 'artístico' | 'social';

export class Project {
  public donations: number[] = [];
  public updates: string[] = [];
  public comments: string[] = [];
  public partialGoals: number[] = [];

  constructor(
    public id: string,
    public title: string,
    public description: string,
    public category: Category,
    public goal: number,
    public deadline: Date,
    public rewards: string[],
    public creator: User
  ) {}

  addDonation(amount: number) {
    if (amount <= 0) throw new Error('El monto debe ser mayor a cero.');
    this.donations.push(amount);
  }

  addComment(comment: string) {
    this.comments.push(comment);
  }

  addUpdate(update: string) {
    this.updates.push(update);
  }

  setPartialGoals(goals: number[]) {
    this.partialGoals = goals;
  }

  checkReachedGoals(): string[] {
    const total = this.donations.reduce((a, b) => a + b, 0);
    return this.partialGoals.map(g => {
      return total >= g ? `✅ Meta parcial de $${g} alcanzada` : `❌ Meta parcial de $${g} no alcanzada`;
    });
  }

  getProgress(): number {
    const total = this.donations.reduce((acc, d) => acc + d, 0);
    return (total / this.goal) * 100;
  }
}
