import { Component, inject, OnInit } from '@angular/core';
import { SharedGeneralServiceAndState } from '../../services/general-state.service';
import { ChoirsList } from '../choirs-list/choirs-list';

@Component({
  selector: 'app-choirs',
  imports: [ChoirsList],
  templateUrl: './choirs.html',
  styleUrl: './choirs.css',
})
export class Choirs implements OnInit {
  private generalStateService = inject(SharedGeneralServiceAndState);
  choirs = this.generalStateService.choirs;
  currentChoir = this.generalStateService.currentChoir;

  ngOnInit(): void {
    if (this.choirs()?.length == 0) {
      this.generalStateService
        .loadData(
          `items/choirs?fields=*,photos.*,chairPerson.*,deputyChairPerson.*,treasurer.*,maleGurdian.*,femaleGurdian.*`
        )
        .subscribe({
          next: (choirs) => {
            this.generalStateService.updateChoirs(choirs);
            if (!this.currentChoir() && choirs.length > 0) {
              this.generalStateService.setCurrentChoir(choirs[0]);
            }
          },
        });
    }
  }
}
