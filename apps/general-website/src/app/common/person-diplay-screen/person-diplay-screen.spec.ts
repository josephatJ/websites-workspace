import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonDiplayScreen } from './person-diplay-screen';

describe('PersonDiplayScreen', () => {
  let component: PersonDiplayScreen;
  let fixture: ComponentFixture<PersonDiplayScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonDiplayScreen],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonDiplayScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
