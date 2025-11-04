import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventsContainer } from './events-container';

describe('EventsContainer', () => {
  let component: EventsContainer;
  let fixture: ComponentFixture<EventsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(EventsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
