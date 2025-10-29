import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedPagesWelcomeContainer } from '../../shared/components/shared-pages-welcome-container/shared-pages-welcome-container';

@Component({
  selector: 'app-contacts-page',
  imports: [CommonModule, SharedPagesWelcomeContainer],
  templateUrl: './contacts-page.html',
  styleUrl: './contacts-page.css',
})
export class ContactsPage {}
