import { Component, inject } from '@angular/core';
import { SharedPagesWelcomeContainer } from '../../shared/components/shared-pages-welcome-container/shared-pages-welcome-container';
import { Donation } from '../../shared/components/donation/donation';
import { SharedGeneralServiceAndState } from '../../shared/services/general-state.service';

@Component({
  selector: 'app-donation-page',
  imports: [SharedPagesWelcomeContainer, Donation],
  templateUrl: './donation-page.html',
  styleUrl: './donation-page.css',
})
export class DonationPage {
  private generalStateService = inject(SharedGeneralServiceAndState);
  donationInformation = this.generalStateService.donationInformation;
}
