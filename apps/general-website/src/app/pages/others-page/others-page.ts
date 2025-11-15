import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Galleria } from '../../shared/components/galleria/galleria';
import { CommonModule } from '@angular/common';
import { LeadersList } from '../../shared/components/leaders-list/leaders-list';
import { SharedPagesWelcomeContainer } from '../../shared/components/shared-pages-welcome-container/shared-pages-welcome-container';
import { CouncilOfElders } from '../../shared/components/council-of-elders/council-of-elders';
import { Choirs } from '../../shared/components/choirs/choirs';

@Component({
  selector: 'app-others-page',
  imports: [
    CommonModule,
    Galleria,
    LeadersList,
    SharedPagesWelcomeContainer,
    CouncilOfElders,
    Choirs,
  ],
  templateUrl: './others-page.html',
  styleUrl: './others-page.css',
})
export class OthersPage implements OnInit {
  private activateRoute = inject(ActivatedRoute);
  uuid!: string;
  category = signal<string>('');

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params) => {
      this.uuid = params?.get('id') || '';
      this.category.set(params?.get('category') || '');
    });
  }
}
