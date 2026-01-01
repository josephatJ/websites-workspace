import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PastorsHistoryList } from './pastors-history-list';

describe('PastorsHistoryList', () => {
  let component: PastorsHistoryList;
  let fixture: ComponentFixture<PastorsHistoryList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastorsHistoryList],
    }).compileComponents();

    fixture = TestBed.createComponent(PastorsHistoryList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
