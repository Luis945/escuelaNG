import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCalificacionesComponent } from './ver-calificaciones.component';

describe('VerCalificacionesComponent', () => {
  let component: VerCalificacionesComponent;
  let fixture: ComponentFixture<VerCalificacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerCalificacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
