import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairsPhoneComponent } from './repairs-phone.component';

describe('RepairsPhoneComponent', () => {
  let component: RepairsPhoneComponent;
  let fixture: ComponentFixture<RepairsPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairsPhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairsPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
