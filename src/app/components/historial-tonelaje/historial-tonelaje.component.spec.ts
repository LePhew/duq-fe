import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialTonelajeComponent } from './historial-tonelaje.component';

describe('HistorialTonelajeComponent', () => {
  let component: HistorialTonelajeComponent;
  let fixture: ComponentFixture<HistorialTonelajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialTonelajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialTonelajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
