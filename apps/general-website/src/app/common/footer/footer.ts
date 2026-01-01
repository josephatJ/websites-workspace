import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { SocialMediaDisplayList } from '../../shared/components/social-media-display-list/social-media-display-list';
import { SharedGeneralServiceAndState } from '../../shared/services/general-state.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, SocialMediaDisplayList],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  private generalStateService = inject(SharedGeneralServiceAndState);
  introduction = this.generalStateService.introduction;
  phoneNumbers = this.generalStateService.phoneNumbers;

  get year(): string {
    return new Date().getFullYear().toString();
  }
}
