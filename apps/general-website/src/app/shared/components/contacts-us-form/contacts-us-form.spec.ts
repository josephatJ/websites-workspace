import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactsUsForm } from './contacts-us-form';

describe('ContactsUsForm', () => {
  let component: ContactsUsForm;
  let fixture: ComponentFixture<ContactsUsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsUsForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactsUsForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
