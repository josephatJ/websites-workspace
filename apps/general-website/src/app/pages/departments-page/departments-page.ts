import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedPagesWelcomeContainer } from '../../shared/components/shared-pages-welcome-container/shared-pages-welcome-container';

@Component({
  selector: 'app-departments-page',
  imports: [CommonModule, SharedPagesWelcomeContainer],
  templateUrl: './departments-page.html',
  styleUrl: './departments-page.css',
})
export class DepartmentsPage {}
