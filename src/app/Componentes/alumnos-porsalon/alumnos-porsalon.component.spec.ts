import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosPorsalonComponent } from './alumnos-porsalon.component';

describe('AlumnosPorsalonComponent', () => {
  let component: AlumnosPorsalonComponent;
  let fixture: ComponentFixture<AlumnosPorsalonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnosPorsalonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosPorsalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
