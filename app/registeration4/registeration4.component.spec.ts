import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registeration4Component } from './registeration4.component';

describe('Registeration4Component', () => {
  let component: Registeration4Component;
  let fixture: ComponentFixture<Registeration4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registeration4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registeration4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
