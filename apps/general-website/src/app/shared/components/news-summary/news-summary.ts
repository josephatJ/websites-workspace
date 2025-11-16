import { Component, inject } from '@angular/core';
import { SharedGeneralServiceAndState } from '../../services/general-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-summary',
  imports: [CommonModule],
  templateUrl: './news-summary.html',
  styleUrl: './news-summary.scss',
})
export class NewsSummary {
  private generalStateService = inject(SharedGeneralServiceAndState);
  news = this.generalStateService.news;
  currentNews = this.generalStateService.currentNews;

  onSetCurrentNews(currentNews: any) {
    this.generalStateService.setCurrentNews(currentNews);
  }
}
