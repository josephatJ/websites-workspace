import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeadersList } from './leaders-list';

describe('LeadersList', () => {
  let component: LeadersList;
  let fixture: ComponentFixture<LeadersList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadersList],
    }).compileComponents();

    fixture = TestBed.createComponent(LeadersList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
