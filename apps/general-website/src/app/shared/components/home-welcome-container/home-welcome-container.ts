import { Component, inject, OnInit } from '@angular/core';
import { SharedIntroductionSummary } from '../shared-introduction-summary/shared-introduction-summary';
import { CarouselModule } from 'primeng/carousel';
import { SharedGeneralServiceAndState } from '../../services/general-state.service';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home-welcome-container',
  imports: [
    CommonModule,
    SharedIntroductionSummary,
    CarouselModule,
    ButtonModule,
    TagModule,
  ],
  templateUrl: './home-welcome-container.html',
  styleUrl: './home-welcome-container.css',
})
export class HomeWelcomeContainer implements OnInit {
  private generalStateService = inject(SharedGeneralServiceAndState);
  homeWelcomeDisplayList = this.generalStateService.homeWelcomeDisplayList;
  responsiveOptions: any[] | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  sanitize(img: string) {
    return this.sanitizer.bypassSecurityTrustUrl(img);
  }

  ngOnInit(): void {
    if (this.homeWelcomeDisplayList()?.length === 0) {
      this.generalStateService
        .loadData(`items/featuredEvents?fields=*`)
        .subscribe({
          next: (featuredEvents) => {
            this.generalStateService.updateHomeWelcomeDisplayList(
              featuredEvents
            );
          },
        });
    }
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
