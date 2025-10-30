import { Component } from '@angular/core';
import { SharedIntroductionSummary } from '../shared-introduction-summary/shared-introduction-summary';

@Component({
  selector: 'app-home-welcome-container',
  imports: [SharedIntroductionSummary],
  templateUrl: './home-welcome-container.html',
  styleUrl: './home-welcome-container.css',
})
export class HomeWelcomeContainer {}
