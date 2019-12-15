import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadEconomicaComponent } from './actividad-economica.component';

describe('ActividadEconomicaComponent', () => {
  let component: ActividadEconomicaComponent;
  let fixture: ComponentFixture<ActividadEconomicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadEconomicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadEconomicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
