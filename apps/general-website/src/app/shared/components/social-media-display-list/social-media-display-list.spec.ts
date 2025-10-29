import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialMediaDisplayList } from './social-media-display-list';

describe('SocialMediaDisplayList', () => {
  let component: SocialMediaDisplayList;
  let fixture: ComponentFixture<SocialMediaDisplayList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaDisplayList],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialMediaDisplayList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
