import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HomeWelcomeContainer } from '../../shared/components/home-welcome-container/home-welcome-container';
import { SharedPagesService } from '../../shared/services/pages-state.service';
import { AboutUsSummary } from '../../shared/components/about-us-summary/about-us-summary';
import { FeaturedEvents } from '../../shared/components/featured-events/featured-events';
import { LeadersList } from '../../shared/components/leaders-list/leaders-list';
import { Donation } from '../../shared/components/donation/donation';

@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule,
    HomeWelcomeContainer,
    AboutUsSummary,
    FeaturedEvents,
    LeadersList,
    Donation,
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  private pagesStateService = inject(SharedPagesService);
  ngOnInit(): void {
    this.pagesStateService.updateCurrentPagePath('/');
  }
}
