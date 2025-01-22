import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registeration5Component } from './registeration5.component';

describe('Registeration5Component', () => {
  let component: Registeration5Component;
  let fixture: ComponentFixture<Registeration5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registeration5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registeration5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
