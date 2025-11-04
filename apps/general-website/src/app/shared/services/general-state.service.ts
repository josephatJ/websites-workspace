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

  private _departments = signal<any[]>([]);
  departments = this._departments.asReadonly();

  private _departmentsActivities = signal<any[]>([]);
  departmentsActivities = this._departmentsActivities.asReadonly();

  private _currentDepartmentAndProjectsPageItem = signal<any>(null);
  currentDepartmentAndProjectsPageItem =
    this._currentDepartmentAndProjectsPageItem.asReadonly();

  updateSocialMedia(socialMedia: any[]) {
    this._socialMedia.set(socialMedia);
  }

  updateDepartments(departments: any[]) {
    this._departments.set(departments);
  }

  updateCurrentDepartmentAndProjectsPageItem(item: any) {
    this._currentDepartmentAndProjectsPageItem.set(item);
  }

  updateDepartmentsActivities(activities: any[]) {
    this._departmentsActivities.set(activities);
  }

  loadData(link: string): Observable<any> {
    return this.httpClientService
      .get(`${link}`)
      .pipe(map((response: any) => response?.data));
  }
}
