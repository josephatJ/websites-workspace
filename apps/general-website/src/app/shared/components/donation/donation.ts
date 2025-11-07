import { Component, inject } from '@angular/core';
import { SharedGeneralServiceAndState } from '../../services/general-state.service';

@Component({
  selector: 'app-donation',
  imports: [],
  templateUrl: './donation.html',
  styleUrl: './donation.css',
})
export class Donation {
  private generalStateService = inject(SharedGeneralServiceAndState);
  donationInformation = this.generalStateService.donationInformation;
}
