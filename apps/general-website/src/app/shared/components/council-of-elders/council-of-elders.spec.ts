import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CouncilOfElders } from './council-of-elders';

describe('CouncilOfElders', () => {
  let component: CouncilOfElders;
  let fixture: ComponentFixture<CouncilOfElders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouncilOfElders],
    }).compileComponents();

    fixture = TestBed.createComponent(CouncilOfElders);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
