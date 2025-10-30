import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventsSummary } from './events-summary';

describe('EventsSummary', () => {
  let component: EventsSummary;
  let fixture: ComponentFixture<EventsSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(EventsSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
