import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorshipSessions } from './worship-sessions';

describe('WorshipSessions', () => {
  let component: WorshipSessions;
  let fixture: ComponentFixture<WorshipSessions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorshipSessions],
    }).compileComponents();

    fixture = TestBed.createComponent(WorshipSessions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
