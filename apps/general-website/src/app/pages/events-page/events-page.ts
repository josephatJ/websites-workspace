import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedPagesWelcomeContainer } from '../../shared/components/shared-pages-welcome-container/shared-pages-welcome-container';
import { NewsSummary } from '../../shared/components/news-summary/news-summary';
import { EventsSummary } from '../../shared/components/events-summary/events-summary';

@Component({
  selector: 'app-events-page',
  imports: [
    CommonModule,
    SharedPagesWelcomeContainer,
    EventsSummary,
    NewsSummary,
  ],
  templateUrl: './events-page.html',
  styleUrl: './events-page.css',
})
export class EventsPage {}
