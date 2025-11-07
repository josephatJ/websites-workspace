import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedPagesWelcomeContainer } from '../../shared/components/shared-pages-welcome-container/shared-pages-welcome-container';
import { AboutUsSummary } from '../../shared/components/about-us-summary/about-us-summary';

@Component({
  selector: 'app-about-us-page',
  imports: [CommonModule, SharedPagesWelcomeContainer, AboutUsSummary],
  templateUrl: './about-us-page.html',
  styleUrl: './about-us-page.css',
})
export class AboutUsPage {}
