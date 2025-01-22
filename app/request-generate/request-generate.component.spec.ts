import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestGenerateComponent } from './request-generate.component';

describe('RequestGenerateComponent', () => {
  let component: RequestGenerateComponent;
  let fixture: ComponentFixture<RequestGenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestGenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
