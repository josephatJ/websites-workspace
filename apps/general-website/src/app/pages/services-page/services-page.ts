import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedPagesWelcomeContainer } from '../../shared/components/shared-pages-welcome-container/shared-pages-welcome-container';

@Component({
  selector: 'app-services-page',
  imports: [CommonModule, SharedPagesWelcomeContainer],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css',
})
export class ServicesPage {}
