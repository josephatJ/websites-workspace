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
    const url = this.ROOT_URL + path;
    return this.httpClient.get(url, httpOptions);
  }

  post(path: string, data: any, httpOptions?: any): Observable<any> {
    return this.httpClient.post(this.ROOT_URL + path, data);
  }

  patch(path: string, data: any, httpOptions?: any): Observable<any> {
    return this.httpClient.patch(this.ROOT_URL + path, data);
  }

  me(): Observable<any> {
    return this.httpClient.get(this.ROOT_URL + 'me');
  }

  private routeUrl(): Observable<string> {
    return this.httpClient
      .get<Manifest>(`manifest.webapp`)
      .pipe(map((response: Manifest) => response.href));
  }

  systemInfo(): Observable<any> {
    return this.httpClient.get(this.ROOT_URL + 'system/info');
  }
}
