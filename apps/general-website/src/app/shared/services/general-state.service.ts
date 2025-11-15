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

  private _events = signal<any[]>([]);
  events = this._events.asReadonly();
  private _currentEvent = signal<any>(null);
  currentEvent = this._currentEvent.asReadonly();

  private _introduction = signal<any>(null);
  introduction = this._introduction.asReadonly();

  private _homeWelcomeDisplayList = signal<any[]>([]);
  homeWelcomeDisplayList = this._homeWelcomeDisplayList.asReadonly();

  private _phoneNumbers = signal<any[]>([]);
  phoneNumbers = this._phoneNumbers.asReadonly();

  private _bankAccounts = signal<any[]>([]);
  bankAccounts = this._bankAccounts.asReadonly();

  private _donationInformation = signal<any>(null);
  donationInformation = this._donationInformation.asReadonly();

  private _aboutUs = signal<any>(null);
  aboutUs = this._aboutUs.asReadonly();

  private _vision = signal<any>(null);
  vision = this._vision.asReadonly();

  private _mission = signal<any>(null);
  mission = this._mission.asReadonly();

  private _leaders = signal<any[]>([]);
  leaders = this._leaders.asReadonly();

  private _worshipSessions = signal<any[]>([]);
  worshipSessions = this._worshipSessions.asReadonly();

  private _teachings = signal<any[]>([]);
  teachings = this._teachings.asReadonly();

  private _currentSermon = signal<any>(null);
  currentSermon = this._currentSermon.asReadonly();

  private _councilOfElders = signal<any[]>([]);
  councilOfElders = this._councilOfElders.asReadonly();

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

  updateEvents(events: any[]) {
    this._events.set(events);
  }

  updateCurrentEvent(event: any) {
    this._currentEvent.set(event);
  }

  updateIntroduction(introduction: any) {
    this._introduction.set(introduction);
  }

  updateHomeWelcomeDisplayList(homeWelcomeDisplayList: any[]) {
    this._homeWelcomeDisplayList.set(homeWelcomeDisplayList);
  }

  updatePhoneNumbers(phoneNumbers: any[]) {
    this._phoneNumbers.set(phoneNumbers);
  }

  updateBankAccounts(accounts: any[]) {
    this._bankAccounts.set(accounts);
  }

  updateDonationInformation(donationInformation: any) {
    this._donationInformation.set(donationInformation);
  }

  updateAboutUs(aboutUs: any) {
    this._aboutUs.set(aboutUs);
  }

  updateMission(mission: any) {
    this._mission.set(mission);
  }

  updateVision(vision: any) {
    this._vision.set(vision);
  }

  updateLeaders(leaders: any[]) {
    this._leaders.set(leaders);
  }

  updateWorshipSessions(sessions: any[]) {
    this._worshipSessions.set(sessions);
  }

  updateTeachings(teachings: any[]) {
    this._teachings.set(teachings);
  }

  setCurrentSermon(sermon: any) {
    this._currentSermon.set(sermon);
  }

  updateCouncilOfElders(elders: any[]) {
    this._councilOfElders.set(elders);
  }

  loadData(link: string): Observable<any> {
    return this.httpClientService
      .get(`${link}`)
      .pipe(map((response: any) => response?.data));
  }
}
