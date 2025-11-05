import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person-diplay-screen',
  imports: [],
  templateUrl: './person-diplay-screen.html',
  styleUrl: './person-diplay-screen.css',
})
export class PersonDiplayScreen {
  @Input() imageUrl!: string;
  @Input() displayName!: string;
}
