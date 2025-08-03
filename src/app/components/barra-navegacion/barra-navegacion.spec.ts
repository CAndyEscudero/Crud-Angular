import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegacion } from './barra-navegacion';

describe('BarraNavegacion', () => {
  let component: BarraNavegacion;
  let fixture: ComponentFixture<BarraNavegacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraNavegacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraNavegacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
