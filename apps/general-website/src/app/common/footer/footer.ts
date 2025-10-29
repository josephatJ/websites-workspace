import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SocialMediaDisplayList } from '../../shared/components/social-media-display-list/social-media-display-list';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, SocialMediaDisplayList],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  get year(): string {
    return new Date().getFullYear().toString();
  }
}
