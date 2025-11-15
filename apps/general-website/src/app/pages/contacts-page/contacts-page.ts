import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SharedPagesWelcomeContainer } from '../../shared/components/shared-pages-welcome-container/shared-pages-welcome-container';
import { MapsLocationContainer } from '../../shared/components/maps-location-container/maps-location-container';
import { ContactsUsForm } from '../../shared/components/contacts-us-form/contacts-us-form';
import { SharedGeneralServiceAndState } from '../../shared/services/general-state.service';

@Component({
  selector: 'app-contacts-page',
  imports: [
    CommonModule,
    SharedPagesWelcomeContainer,
    ContactsUsForm,
    MapsLocationContainer,
  ],
  templateUrl: './contacts-page.html',
  styleUrl: './contacts-page.css',
})
export class ContactsPage {
  private generalStateService = inject(SharedGeneralServiceAndState);
  phoneNumbers = this.generalStateService.phoneNumbers;
  introduction = this.generalStateService.introduction;
}
