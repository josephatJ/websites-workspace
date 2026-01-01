import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturedEvents } from './featured-events';

describe('FeaturedEvents', () => {
  let component: FeaturedEvents;
  let fixture: ComponentFixture<FeaturedEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedEvents],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedEvents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
