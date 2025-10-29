import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedPagesWelcomeContainer } from '../../shared/components/shared-pages-welcome-container/shared-pages-welcome-container';

@Component({
  selector: 'app-events-page',
  imports: [CommonModule, SharedPagesWelcomeContainer],
  templateUrl: './events-page.html',
  styleUrl: './events-page.css',
})
export class EventsPage {}
