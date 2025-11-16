import { Component, inject, OnInit } from '@angular/core';
import { SharedGeneralServiceAndState } from '../../services/general-state.service';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-church-unions',
  imports: [CardModule],
  templateUrl: './church-unions.html',
  styleUrl: './church-unions.css',
})
export class ChurchUnions implements OnInit {
  private generalStateService = inject(SharedGeneralServiceAndState);
  churchUnions = this.generalStateService.churchUnions;

  ngOnInit(): void {
    if (this.churchUnions()?.length == 0) {
      this.generalStateService.loadData(`items/churchUnions`).subscribe({
        next: (churchUnions) => {
          this.generalStateService.updateChurchUnions(churchUnions);
        },
      });
    }
  }
}
