import { Component } from '@angular/core';
import { NewsSummary } from '../news-summary/news-summary';

@Component({
  selector: 'app-news-container',
  imports: [NewsSummary],
  templateUrl: './news-container.html',
  styleUrl: './news-container.css',
})
export class NewsContainer {}
