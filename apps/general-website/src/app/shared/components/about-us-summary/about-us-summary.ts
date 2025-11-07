import { Component, inject, OnInit } from '@angular/core';
import { SharedGeneralServiceAndState } from '../../services/general-state.service';

@Component({
  selector: 'app-about-us-summary',
  imports: [],
  templateUrl: './about-us-summary.html',
  styleUrl: './about-us-summary.scss',
})
export class AboutUsSummary implements OnInit {
  private generalStateService = inject(SharedGeneralServiceAndState);
  aboutUs = this.generalStateService.aboutUs;
  vision = this.generalStateService.vision;
  mission = this.generalStateService.mission;

  ngOnInit(): void {
    if (!this.aboutUs()) {
      this.generalStateService
        .loadData(`items/aboutUs?fields=*,photos.*`)
        .subscribe({
          next: (aboutUs) => this.generalStateService.updateAboutUs(aboutUs),
        });
    }
  }
}
