import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMaestroComponent } from './registro-maestro.component';

describe('RegistroMaestroComponent', () => {
  let component: RegistroMaestroComponent;
  let fixture: ComponentFixture<RegistroMaestroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroMaestroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
