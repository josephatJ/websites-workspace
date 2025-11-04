import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { SharedPagesWelcomeContainer } from '../../shared/components/shared-pages-welcome-container/shared-pages-welcome-container';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services-page',
  imports: [CommonModule, SharedPagesWelcomeContainer],
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
