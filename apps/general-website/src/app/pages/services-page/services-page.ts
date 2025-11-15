import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { SharedPagesWelcomeContainer } from '../../shared/components/shared-pages-welcome-container/shared-pages-welcome-container';
import { ActivatedRoute } from '@angular/router';
import { WorshipSessions } from '../../shared/components/worship-sessions/worship-sessions';
import { Teachings } from '../../shared/components/teachings/teachings';

@Component({
  selector: 'app-services-page',
  imports: [
    CommonModule,
    SharedPagesWelcomeContainer,
    WorshipSessions,
    Teachings,
  ],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css',
})
export class ServicesPage {
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
