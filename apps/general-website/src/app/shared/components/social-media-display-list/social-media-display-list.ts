import { Component, inject, OnInit } from '@angular/core';
import { SharedGeneralServiceAndState } from '../../services/general-state.service';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-social-media-display-list',
  imports: [CommonModule, ButtonModule],
  templateUrl: './social-media-display-list.html',
  styleUrl: './social-media-display-list.css',
})
export class SocialMediaDisplayList implements OnInit {
  private generalStateService = inject(SharedGeneralServiceAndState);

  socialMedia = this.generalStateService.socialMedia;

  ngOnInit(): void {
    this.generalStateService.loadData(`items/socialMedia`).subscribe({
      next: (response) => this.generalStateService.updateSocialMedia(response),
    });
  }
}
