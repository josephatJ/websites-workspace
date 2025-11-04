import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { SharedPagesWelcomeContainer } from '../../shared/components/shared-pages-welcome-container/shared-pages-welcome-container';
import { ActivatedRoute } from '@angular/router';
import { EventsContainer } from '../../shared/components/events-container/events-container';
import { NewsContainer } from '../../shared/components/news-container/news-container';

@Component({
  selector: 'app-events-page',
  imports: [
    CommonModule,
    SharedPagesWelcomeContainer,
    EventsContainer,
    NewsContainer,
  ],
  templateUrl: './events-page.html',
  styleUrl: './events-page.css',
})
export class EventsPage implements OnInit {
  private activateRoute = inject(ActivatedRoute);
  uuid!: string;
  category = signal<string>('');

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params) => {
      this.uuid = params?.get('id') || '';
      this.category.set(params?.get('category') || '');
    });
  }
}
