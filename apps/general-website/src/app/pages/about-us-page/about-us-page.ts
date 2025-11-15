import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { SharedPagesWelcomeContainer } from '../../shared/components/shared-pages-welcome-container/shared-pages-welcome-container';
import { AboutUsSummary } from '../../shared/components/about-us-summary/about-us-summary';
import { SharedGeneralServiceAndState } from '../../shared/services/general-state.service';
import { LeadersList } from '../../shared/components/leaders-list/leaders-list';
import { MapsLocationContainer } from '../../shared/components/maps-location-container/maps-location-container';

@Component({
  selector: 'app-about-us-page',
  imports: [
    CommonModule,
    SharedPagesWelcomeContainer,
    AboutUsSummary,
    LeadersList,
    MapsLocationContainer,
  ],
  templateUrl: './about-us-page.html',
  styleUrl: './about-us-page.css',
})
export class AboutUsPage implements OnInit {
  private generalStateService = inject(SharedGeneralServiceAndState);
  aboutUs = this.generalStateService.aboutUs;

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
