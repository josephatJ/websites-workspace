import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChoirsList } from './choirs-list';

describe('ChoirsList', () => {
  let component: ChoirsList;
  let fixture: ComponentFixture<ChoirsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoirsList],
    }).compileComponents();

    fixture = TestBed.createComponent(ChoirsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
