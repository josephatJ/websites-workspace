import { Component, inject, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { SharedGeneralServiceAndState } from '../../services/general-state.service';
import { orderBy } from 'lodash';

@Component({
  selector: 'app-council-of-elders',
  imports: [CardModule],
  templateUrl: './council-of-elders.html',
  styleUrl: './council-of-elders.css',
})
export class CouncilOfElders implements OnInit {
  private generalStateService = inject(SharedGeneralServiceAndState);
  councilOfElders = this.generalStateService.councilOfElders;

  ngOnInit(): void {
    if (this.councilOfElders()?.length === 0) {
      this.generalStateService.loadData(`items/councilOfElders`).subscribe({
        next: (councilOfElders) => {
          this.generalStateService.updateCouncilOfElders(
            orderBy(councilOfElders, ['order'], ['asc'])
          );
        },
      });
    }
  }
}
