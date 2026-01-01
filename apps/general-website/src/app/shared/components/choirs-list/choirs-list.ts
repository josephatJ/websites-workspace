import { Component, inject, OnInit } from '@angular/core';
import { SharedGeneralServiceAndState } from '../../services/general-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-choirs-list',
  imports: [CommonModule],
  templateUrl: './choirs-list.html',
  styleUrl: './choirs-list.scss',
})
export class ChoirsList implements OnInit {
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

  onSetCurrentChoir(choir: any) {
    this.generalStateService.setCurrentChoir(choir);
  }
}
