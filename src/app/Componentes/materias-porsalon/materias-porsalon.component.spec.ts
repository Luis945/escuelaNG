import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasPorsalonComponent } from './materias-porsalon.component';

describe('MateriasPorsalonComponent', () => {
  let component: MateriasPorsalonComponent;
  let fixture: ComponentFixture<MateriasPorsalonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasPorsalonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasPorsalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
