import { Component, inject, OnInit } from '@angular/core';
import { EventsSummary } from '../events-summary/events-summary';
import { SharedGeneralServiceAndState } from '../../services/general-state.service';
import { CommonModule } from '@angular/common';
import { FormatMarkdownToHtmlPipe } from '../../pipes/format-markdown-to-html-pipe';

@Component({
  selector: 'app-events-container',
  imports: [CommonModule, EventsSummary, FormatMarkdownToHtmlPipe],
  templateUrl: './events-container.html',
  styleUrl: './events-container.css',
})
export class EventsContainer implements OnInit {
  private generalStateService = inject(SharedGeneralServiceAndState);
  events = this.generalStateService.events;
  currentEvent = this.generalStateService.currentEvent;

  ngOnInit() {
    // console.log(this.events());
    if (this.events()?.length === 0) {
      this.generalStateService
        .loadData(`items/events?fields=*,photos.*`)
        .subscribe({
          next: (events) => {
            this.generalStateService.updateEvents(events);
            this.generalStateService.updateCurrentEvent(events[0]);
          },
          error: (err) => {
            console.error(err);
          },
        });
    }
  }
}
