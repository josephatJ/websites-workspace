import { Component, inject, OnInit } from '@angular/core';
import { SharedGeneralServiceAndState } from '../../services/general-state.service';

@Component({
  selector: 'app-teachings',
  imports: [],
  templateUrl: './teachings.html',
  styleUrl: './teachings.css',
})
export class Teachings implements OnInit {
  private generalStateService = inject(SharedGeneralServiceAndState);
  teachings = this.generalStateService.teachings;

  ngOnInit(): void {
    if (this.teachings()?.length === 0) {
      this.generalStateService.loadData(`items/teachings`).subscribe({
        next: (teachings) => {
          this.generalStateService.updateTeachings(teachings);
        },
      });
    }
  }
}
