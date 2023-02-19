import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPhoneComponent } from './new-phone.component';

describe('NewPhoneComponent', () => {
  let component: NewPhoneComponent;
  let fixture: ComponentFixture<NewPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
