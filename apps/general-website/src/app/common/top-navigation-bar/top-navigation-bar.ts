import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SocialMediaDisplayList } from '../../shared/components/social-media-display-list/social-media-display-list';

@Component({
  selector: 'app-top-navigation-bar',
  imports: [CommonModule, SocialMediaDisplayList],
  templateUrl: './top-navigation-bar.html',
  styleUrl: './top-navigation-bar.css',
})
export class TopNavigationBar {}
