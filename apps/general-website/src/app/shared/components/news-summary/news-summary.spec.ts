import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsSummary } from './news-summary';

describe('NewsSummary', () => {
  let component: NewsSummary;
  let fixture: ComponentFixture<NewsSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
