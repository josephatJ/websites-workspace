import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeachingsSummaryList } from './teachings-summary-list';

describe('TeachingsSummaryList', () => {
  let component: TeachingsSummaryList;
  let fixture: ComponentFixture<TeachingsSummaryList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachingsSummaryList],
    }).compileComponents();

    fixture = TestBed.createComponent(TeachingsSummaryList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
