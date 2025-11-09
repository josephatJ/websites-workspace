import { Component, inject, OnInit } from '@angular/core';
import { SharedGeneralServiceAndState } from '../../services/general-state.service';
import { orderBy } from 'lodash';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-leaders-list',
  imports: [CardModule, ButtonModule],
  templateUrl: './leaders-list.html',
  styleUrl: './leaders-list.css',
})
export class LeadersList implements OnInit {
  private generalStateService = inject(SharedGeneralServiceAndState);
  leaders = this.generalStateService.leaders;

  ngOnInit(): void {
    if (!this.leaders() || this.leaders()?.length === 0) {
      this.generalStateService.loadData(`items/leaders`).subscribe({
        next: (leaders) => {
          this.generalStateService.updateLeaders(
            orderBy(leaders, ['order'], ['asc'])
          );
        },
      });
    }
  }
}
