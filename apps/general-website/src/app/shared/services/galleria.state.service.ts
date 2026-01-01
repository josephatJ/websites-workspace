import { inject, Injectable, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NgxHttpClientService } from '@websites-workspace/ngx-http-client-service';

@Injectable({
  providedIn: 'root',
})
export class GalleriaStateService {
  private httpClientService = inject(NgxHttpClientService);
  private _galleria = signal<any[]>([]);
  galleria = this._galleria.asReadonly();

  updateGalleria(galleria: any) {
    this._galleria.set(galleria);
  }

  loadGalleria(link: string): Observable<any[]> {
    return this.httpClientService
      .get(`${link}`)
      .pipe(map((response: any) => response?.data));
  }
}
