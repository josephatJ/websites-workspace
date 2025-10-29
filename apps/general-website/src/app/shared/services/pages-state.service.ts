import { inject, Injectable, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NgxHttpClientService } from '@websites-workspace/ngx-http-client-service';

@Injectable({
  providedIn: 'root',
})
export class SharedPagesService {
  private httpClientService = inject(NgxHttpClientService);
  private _pages = signal<any[]>([]);
  pages = this._pages.asReadonly();

  updatePages(pages: any[]) {
    this._pages.set(pages);
  }

  loadPages(): Observable<any[]> {
    return this.httpClientService
      .get(`items/pages`)
      .pipe(map((response: any) => response?.data));
  }
}
