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
  private _httpClientInitiated: boolean | undefined;

  constructor() {
    if (!this._httpClientInitiated) {
      this._httpClientInitiated = true;
      this.init();
    }
  }

  init() {
    this.routeUrl().subscribe({
      next: (response: string) => {
        console.log('response #######################', response);
        this.ROOT_URL = response ? response : this.ROOT_URL;
      },
    });
  }

  get(path: string, httpOptions?: any): Observable<any> {
    if (!this._httpClientInitiated) {
      this.init();
    }
    const url = this.ROOT_URL + path;
    console.log('GET URL #######################', url);
    return this.httpClient.get(url, httpOptions);
  }

  post(path: string, data: any, httpOptions?: any): Observable<any> {
    if (!this._httpClientInitiated) {
      this.init();
    }
    const url = this.ROOT_URL + path;
    return this.httpClient.post(url, data, httpOptions);
  }

  patch(path: string, data: any, httpOptions?: any): Observable<any> {
    if (!this._httpClientInitiated) {
      this.init();
    }
    const url = this.ROOT_URL + path;
    return this.httpClient.patch(url, data, httpOptions);
  }

  me(): Observable<any> {
    if (!this._httpClientInitiated) {
      this.init();
    }
    return this.httpClient.get(this.ROOT_URL + 'me');
  }

  private routeUrl(): Observable<string> {
    return this.httpClient
      .get<Manifest>(`manifest.webapp`)
      .pipe(map((response: Manifest) => response.href));
  }

  systemInfo(): Observable<any> {
    if (!this._httpClientInitiated) {
      this.init();
    }
    return this.httpClient.get(this.ROOT_URL + 'system/info');
  }
}
