import { Component, inject, OnInit } from '@angular/core';
import { NewsSummary } from '../news-summary/news-summary';
import { SharedGeneralServiceAndState } from '../../services/general-state.service';
import { FormatMarkdownToHtmlPipe } from '../../pipes/format-markdown-to-html-pipe';
import { orderBy } from 'lodash';

@Component({
  selector: 'app-news-container',
  imports: [NewsSummary, FormatMarkdownToHtmlPipe],
  templateUrl: './news-container.html',
  styleUrl: './news-container.css',
})
export class NewsContainer implements OnInit {
  private generalStateService = inject(SharedGeneralServiceAndState);
  news = this.generalStateService.news;
  currentNews = this.generalStateService.currentNews;

  ngOnInit() {
    if (this.news()?.length === 0) {
      this.generalStateService
        .loadData(`items/news?fields=*,photos.*`)
        .subscribe({
          next: (news) => {
            news = orderBy(news, ['releaseDate'], ['desc']);
            this.generalStateService.updateNews(news);
            this.generalStateService.setCurrentNews(news[0]);
          },
          error: (err) => {
            console.error(err);
          },
        });
    }
    if (!this.currentNews() && this.news()?.length > 0) {
      this.generalStateService.setCurrentNews(this.news()[0]);
    }
  }
}
