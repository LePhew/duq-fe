import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonelajeDiaComponent } from './tonelaje-dia.component';

describe('TonelajeDiaComponent', () => {
  let component: TonelajeDiaComponent;
  let fixture: ComponentFixture<TonelajeDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TonelajeDiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TonelajeDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
