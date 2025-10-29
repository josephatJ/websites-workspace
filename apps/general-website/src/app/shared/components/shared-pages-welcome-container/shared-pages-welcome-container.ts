import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shared-pages-welcome-container',
  imports: [],
  templateUrl: './shared-pages-welcome-container.html',
  styleUrl: './shared-pages-welcome-container.css',
})
export class SharedPagesWelcomeContainer {
  @Input() pageName!: string;
  @Input() currentPath!: string;
  @Input() currentPathName!: string;
  private router = inject(Router);

  changeRoute(event: Event, path: string): void {
    event.stopPropagation();
    this.router.navigate([path]);
  }
}
