import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChurchUnions } from './church-unions';

describe('ChurchUnions', () => {
  let component: ChurchUnions;
  let fixture: ComponentFixture<ChurchUnions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChurchUnions],
    }).compileComponents();

    fixture = TestBed.createComponent(ChurchUnions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
