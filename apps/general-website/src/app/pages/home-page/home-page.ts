import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HomeWelcomeContainer } from '../../shared/components/home-welcome-container/home-welcome-container';
import { SharedPagesService } from '../../shared/services/pages-state.service';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, HomeWelcomeContainer],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  private pagesStateService = inject(SharedPagesService);
  ngOnInit(): void {
    this.pagesStateService.updateCurrentPagePath('/');
  }
}
