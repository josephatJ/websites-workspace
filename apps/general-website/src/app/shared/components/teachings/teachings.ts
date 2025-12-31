import { Component, inject, Input, OnInit } from '@angular/core';
import { SharedGeneralServiceAndState } from '../../services/general-state.service';
import { TeachingsSummaryList } from '../teachings-summary-list/teachings-summary-list';
import { FormatMarkdownToHtmlPipe } from '../../pipes/format-markdown-to-html-pipe';
import { CommonModule } from '@angular/common';
import { orderBy } from 'lodash';

@Component({
  selector: 'app-teachings',
  imports: [CommonModule, TeachingsSummaryList, FormatMarkdownToHtmlPipe],
  templateUrl: './teachings.html',
  styleUrl: './teachings.css',
})
export class Teachings implements OnInit {
  @Input() id!: string;
  private generalStateService = inject(SharedGeneralServiceAndState);
  teachings = this.generalStateService.teachings;
  currentSermon = this.generalStateService.currentSermon;

  ngOnInit(): void {
    if (this.teachings()?.length === 0) {
      this.generalStateService.loadData(`items/sermons`).subscribe({
        next: (teachings) => {
          teachings = orderBy(teachings, ['dateOfRelease'], ['desc']);
          this.generalStateService.updateTeachings(teachings);
          if (this.id && this.id != 'teachings') {
            // TODO: Move this logic to a helper at the point where teachings or sermons are loaded. The base url should also be configured somewhere
            const currentSermon = teachings?.find(
              (sermon: any) => sermon?.id === this.id
            );
            const baseUrl =
              'https://mwengemoravian.or.tz/#/services/teachings/';
            const message =
              'Karibu utazame somo lenye kichwa -> *' +
              currentSermon?.title +
              '* :';
            const shareUrl = `https://wa.me/?text=${encodeURIComponent(
              message + baseUrl + currentSermon.id
            )}`;
            this.generalStateService.setCurrentSermon({
              ...currentSermon,
              shareUrl,
            });
          } else {
            const currentSermon = teachings[0];
            const baseUrl =
              'https://mwengemoravian.or.tz/#/services/teachings/';
            const message =
              'Karibu utazame somo lenye kichwa -> *' +
              currentSermon?.title +
              '* :';
            const shareUrl = `https://wa.me/?text=${encodeURIComponent(
              message + baseUrl + currentSermon.id
            )}`;
            this.generalStateService.setCurrentSermon({
              ...currentSermon,
              shareUrl,
            });
          }
        },
      });
    }
  }
}
