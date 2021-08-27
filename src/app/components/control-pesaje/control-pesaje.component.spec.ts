import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPesajeComponent } from './control-pesaje.component';

describe('ControlPesajeComponent', () => {
  let component: ControlPesajeComponent;
  let fixture: ComponentFixture<ControlPesajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlPesajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPesajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
