import { Component } from '@angular/core';
import { SharedPagesWelcomeContainer } from '../../shared/components/shared-pages-welcome-container/shared-pages-welcome-container';

@Component({
  selector: 'app-donation-page',
  imports: [SharedPagesWelcomeContainer],
  templateUrl: './donation-page.html',
  styleUrl: './donation-page.css',
})
export class DonationPage {}
