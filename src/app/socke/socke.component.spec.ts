import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SockeComponent } from './socke.component';

describe('SockeComponent', () => {
  let component: SockeComponent;
  let fixture: ComponentFixture<SockeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SockeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SockeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
