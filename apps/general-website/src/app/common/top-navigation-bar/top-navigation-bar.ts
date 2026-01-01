import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SocialMediaDisplayList } from '../../shared/components/social-media-display-list/social-media-display-list';
import { SharedGeneralServiceAndState } from '../../shared/services/general-state.service';

@Component({
  selector: 'app-top-navigation-bar',
  imports: [CommonModule, SocialMediaDisplayList],
  templateUrl: './top-navigation-bar.html',
  styleUrl: './top-navigation-bar.css',
})
export class TopNavigationBar {
  private generalStateService = inject(SharedGeneralServiceAndState);
  introduction = this.generalStateService.introduction;
  phoneNumbers = this.generalStateService.phoneNumbers;
}
