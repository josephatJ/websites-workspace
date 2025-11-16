import { Component, inject, OnInit } from '@angular/core';
import { SharedGeneralServiceAndState } from '../../services/general-state.service';
import { TeachingsSummaryList } from '../teachings-summary-list/teachings-summary-list';
import { FormatMarkdownToHtmlPipe } from '../../pipes/format-markdown-to-html-pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teachings',
  imports: [CommonModule, TeachingsSummaryList, FormatMarkdownToHtmlPipe],
  templateUrl: './teachings.html',
  styleUrl: './teachings.css',
})
export class Teachings implements OnInit {
  private generalStateService = inject(SharedGeneralServiceAndState);
  teachings = this.generalStateService.teachings;
  currentSermon = this.generalStateService.currentSermon;

  ngOnInit(): void {
    if (this.teachings()?.length === 0) {
      this.generalStateService.loadData(`items/sermons`).subscribe({
        next: (teachings) => {
          this.generalStateService.updateTeachings(teachings);
          this.generalStateService.setCurrentSermon(teachings[0]);
        },
      });
    }
  }
}
