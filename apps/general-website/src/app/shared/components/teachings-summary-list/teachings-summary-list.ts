import { Component, inject, OnInit } from '@angular/core';
import { SharedGeneralServiceAndState } from '../../services/general-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teachings-summary-list',
  imports: [CommonModule],
  templateUrl: './teachings-summary-list.html',
  styleUrl: './teachings-summary-list.scss',
})
export class TeachingsSummaryList implements OnInit {
  private generalStateService = inject(SharedGeneralServiceAndState);
  teachings = this.generalStateService.teachings;

  ngOnInit(): void {
    if (this.teachings()?.length === 0) {
      this.generalStateService.loadData(`items/sermons`).subscribe({
        next: (teachings) => {
          this.generalStateService.updateTeachings(teachings);
        },
      });
    }
  }

  onSetCurrentSermon(sermon: any) {
    this.generalStateService.setCurrentSermon(sermon);
  }
}
