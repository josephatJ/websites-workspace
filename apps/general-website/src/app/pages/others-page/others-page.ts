import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Galleria } from '../../shared/components/galleria/galleria';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-others-page',
  imports: [CommonModule, Galleria],
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
