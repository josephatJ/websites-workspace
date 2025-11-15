import { Component, inject, OnInit } from '@angular/core';
import { SharedGeneralServiceAndState } from '../../services/general-state.service';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-worship-sessions',
  imports: [CardModule],
  templateUrl: './worship-sessions.html',
  styleUrl: './worship-sessions.css',
})
export class WorshipSessions implements OnInit {
  private generalStateService = inject(SharedGeneralServiceAndState);
  worshipSessions = this.generalStateService.worshipSessions;

  ngOnInit(): void {
    if (this.worshipSessions()?.length === 0) {
      this.generalStateService.loadData(`items/worshipSessions`).subscribe({
        next: (workshipSessions) => {
          this.generalStateService.updateWorshipSessions(workshipSessions);
        },
      });
    }
  }
}
