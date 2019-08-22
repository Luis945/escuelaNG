import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSalonComponent } from './agregar-salon.component';

describe('AgregarSalonComponent', () => {
  let component: AgregarSalonComponent;
  let fixture: ComponentFixture<AgregarSalonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarSalonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
