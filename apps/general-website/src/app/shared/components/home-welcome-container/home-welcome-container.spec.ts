import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeWelcomeContainer } from './home-welcome-container';

describe('HomeWelcomeContainer', () => {
  let component: HomeWelcomeContainer;
  let fixture: ComponentFixture<HomeWelcomeContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeWelcomeContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeWelcomeContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
