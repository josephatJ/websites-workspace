import { Component, inject } from '@angular/core';
import { SharedGeneralServiceAndState } from '../../services/general-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events-summary',
  imports: [CommonModule],
  templateUrl: './events-summary.html',
  styleUrl: './events-summary.scss',
})
export class EventsSummary {
  private generalStateService = inject(SharedGeneralServiceAndState);
  events = this.generalStateService.events;
  currentEvent = this.generalStateService.currentEvent;

  onSetCurrentEvent(currentEvent: any) {
    this.generalStateService.updateCurrentEvent(currentEvent);
  }
}
