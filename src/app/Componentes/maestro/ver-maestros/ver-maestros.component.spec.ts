import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMaestrosComponent } from './ver-maestros.component';

describe('VerMaestrosComponent', () => {
  let component: VerMaestrosComponent;
  let fixture: ComponentFixture<VerMaestrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMaestrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMaestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
