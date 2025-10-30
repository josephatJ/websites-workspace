import { inject, Injectable, signal } from '@angular/core';
import { NgxHttpClientService } from '@websites-workspace/ngx-http-client-service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedGeneralServiceAndState {
  private httpClientService = inject(NgxHttpClientService);

  private _socialMedia = signal<any[]>([]);
  socialMedia = this._socialMedia.asReadonly();

  updateSocialMedia(socialMedia: any[]) {
    this._socialMedia.set(socialMedia);
  }

  loadData(link: string): Observable<any> {
    return this.httpClientService
      .get(`${link}`)
      .pipe(map((response: any) => response?.data));
  }
}
