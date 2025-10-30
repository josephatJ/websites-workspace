import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedIntroductionSummary } from './shared-introduction-summary';

describe('SharedIntroductionSummary', () => {
  let component: SharedIntroductionSummary;
  let fixture: ComponentFixture<SharedIntroductionSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedIntroductionSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedIntroductionSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
