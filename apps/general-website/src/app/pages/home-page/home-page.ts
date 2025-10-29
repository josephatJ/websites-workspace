import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeWelcomeContainer } from '../../shared/components/home-welcome-container/home-welcome-container';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, HomeWelcomeContainer],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
