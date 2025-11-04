import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsContainer } from './news-container';

describe('NewsContainer', () => {
  let component: NewsContainer;
  let fixture: ComponentFixture<NewsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
