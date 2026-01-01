import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutUsSummary } from './about-us-summary';

describe('AboutUsSummary', () => {
  let component: AboutUsSummary;
  let fixture: ComponentFixture<AboutUsSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutUsSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
