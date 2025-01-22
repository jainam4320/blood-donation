import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpCheckingComponent } from './otp-checking.component';

describe('OtpCheckingComponent', () => {
  let component: OtpCheckingComponent;
  let fixture: ComponentFixture<OtpCheckingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpCheckingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpCheckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
