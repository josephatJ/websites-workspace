import { Component } from '@angular/core';
import { EventsSummary } from '../events-summary/events-summary';

@Component({
  selector: 'app-events-container',
  imports: [EventsSummary],
  templateUrl: './events-container.html',
  styleUrl: './events-container.css',
})
export class EventsContainer {}
