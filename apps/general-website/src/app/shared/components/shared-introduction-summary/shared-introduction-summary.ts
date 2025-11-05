import { Component, inject } from '@angular/core';
import { PersonDiplayScreen } from '../../../common/person-diplay-screen/person-diplay-screen';
import { SharedGeneralServiceAndState } from '../../services/general-state.service';

@Component({
  selector: 'app-shared-introduction-summary',
  imports: [PersonDiplayScreen],
  templateUrl: './shared-introduction-summary.html',
  styleUrl: './shared-introduction-summary.css',
})
export class SharedIntroductionSummary {
  private generalStateService = inject(SharedGeneralServiceAndState);
  introduction = this.generalStateService.introduction;
}
