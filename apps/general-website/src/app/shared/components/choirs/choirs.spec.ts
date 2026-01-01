import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Choirs } from './choirs';

describe('Choirs', () => {
  let component: Choirs;
  let fixture: ComponentFixture<Choirs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Choirs],
    }).compileComponents();

    fixture = TestBed.createComponent(Choirs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
