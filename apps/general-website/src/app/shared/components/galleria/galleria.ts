import { Component, inject, OnInit } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { GalleriaStateService } from '../../services/galleria.state.service';
import { CommonModule } from '@angular/common';
import { orderBy } from 'lodash';

@Component({
  selector: 'app-galleria',
  imports: [CommonModule, ImageModule],
  templateUrl: './galleria.html',
  styleUrl: './galleria.css',
})
export class Galleria implements OnInit {
  private galleriaStateService = inject(GalleriaStateService);
  galleria = this.galleriaStateService.galleria;

  ngOnInit(): void {
    this.galleriaStateService
      .loadGalleria(`items/galleria?fields=*,photos.*`)
      .subscribe({
        next: (galleria) => {
          this.galleriaStateService.updateGalleria(
            orderBy(galleria, ['order'], ['desc'])
          );
        },
      });
  }
}
