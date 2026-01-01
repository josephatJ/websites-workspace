import { Component, inject, OnInit } from '@angular/core';
import { SharedGeneralServiceAndState } from '../../services/general-state.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { orderBy } from 'lodash';

@Component({
  selector: 'app-teachings-summary-list',
  imports: [CommonModule],
  templateUrl: './teachings-summary-list.html',
  styleUrl: './teachings-summary-list.scss',
})
export class TeachingsSummaryList implements OnInit {
  private generalStateService = inject(SharedGeneralServiceAndState);
  private router = inject(Router);
  teachings = this.generalStateService.teachings;
  currentSermon = this.generalStateService.currentSermon;

  ngOnInit(): void {
    if (this.teachings()?.length === 0) {
      this.generalStateService.loadData(`items/sermons`).subscribe({
        next: (teachings) => {
          teachings = orderBy(teachings, ['dateOfRelease'], ['desc']);
          this.generalStateService.updateTeachings(teachings);
        },
      });
    }
  }

  onSetCurrentSermon(sermon: any) {
    this.router.navigate([`services/teachings/${sermon.id}`]);
    const baseUrl = 'https://mwengemoravian.or.tz/#/services/teachings/';
    const message =
      'Karibu utazame somo lenye kichwa -> *' + sermon?.title + '* :';
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(
      message + baseUrl + sermon.id
    )}`;
    this.generalStateService.setCurrentSermon({
      ...sermon,
      shareUrl,
    });
  }
}
