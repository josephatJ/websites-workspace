import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-person-diplay-screen',
  imports: [],
  templateUrl: './person-diplay-screen.html',
  styleUrl: './person-diplay-screen.css',
})
export class PersonDiplayScreen {
  @Input() imageReference!: string;
  @Input() displayName!: string;

  constructor(private sanitizer: DomSanitizer) {}

  sanitize(img: string) {
    return this.sanitizer.bypassSecurityTrustUrl(img);
  }
}
