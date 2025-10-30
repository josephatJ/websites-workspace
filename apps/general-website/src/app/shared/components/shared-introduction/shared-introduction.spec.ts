import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedIntroduction } from './shared-introduction';

describe('SharedIntroduction', () => {
  let component: SharedIntroduction;
  let fixture: ComponentFixture<SharedIntroduction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedIntroduction],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedIntroduction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
