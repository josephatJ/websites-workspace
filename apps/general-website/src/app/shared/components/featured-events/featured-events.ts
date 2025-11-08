import { Component, inject, OnInit } from '@angular/core';
import { SharedGeneralServiceAndState } from '../../services/general-state.service';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-featured-events',
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './featured-events.html',
  styleUrl: './featured-events.css',
})
export class FeaturedEvents implements OnInit {
  private generalStateService = inject(SharedGeneralServiceAndState);
  events = this.generalStateService.events;
  responsiveOptions: any[] | undefined;

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1200px',
        numVisible: 1,
        numScroll: 2,
      },
    ];
    if (!this.events || this.events()?.length === 0) {
      this.generalStateService
        .loadData(`items/events?fields=*,photos.*`)
        .subscribe({
          next: (events) => {
            this.generalStateService.updateEvents(events);
          },
        });
    }
  }
}
