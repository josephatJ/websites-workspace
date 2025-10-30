import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapsLocationContainer } from './maps-location-container';

describe('MapsLocationContainer', () => {
  let component: MapsLocationContainer;
  let fixture: ComponentFixture<MapsLocationContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapsLocationContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(MapsLocationContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
