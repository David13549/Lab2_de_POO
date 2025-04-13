import { Donation } from '../models/Donation';
import { Project } from '../models/Project';
import { Certificate } from '../models/Certificate';

export class PaymentService {
  private donations: Donation[] = [];

  donate(donation: Donation, project: Project): Certificate {
    project.addDonation(donation.amount);
    this.donations.push(donation);
    return new Certificate(donation.donorId, project.title, donation.amount, donation.date);
  }
}