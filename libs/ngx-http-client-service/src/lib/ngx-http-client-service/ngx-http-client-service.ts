import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Manifest } from './manifest.model';

@Injectable({
  providedIn: 'root',
})
export class NgxHttpClientService {
  private ROOT_URL = '../../../';
  private httpClient = inject(HttpClient);
  private _httpClientInitiated = false;

  init(): Promise<void> {
    return new Promise((resolve) => {
      if (this._httpClientInitiated) {
        resolve();
        return;
      }

      this.routeUrl().subscribe({
        next: (response: string) => {
          this.ROOT_URL = response ?? this.ROOT_URL;
          this._httpClientInitiated = true;
          resolve();
        },
        error: () => resolve(),
      });
    });
  }

  private routeUrl(): Observable<string> {
    return this.httpClient
      .get<Manifest>('manifest.webapp')
      .pipe(map((response: Manifest) => response.href));
  }

  get(path: string, httpOptions?: any) {
    return this.httpClient.get(this.ROOT_URL + path, httpOptions);
  }

  post(path: string, body: any, httpOptions?: any) {
    return this.httpClient.post(this.ROOT_URL + path, body, httpOptions);
  }
}
