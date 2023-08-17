import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCotizacionesComponent } from './dashboard-cotizaciones.component';

describe('DashboardCotizacionesComponent', () => {
  let component: DashboardCotizacionesComponent;
  let fixture: ComponentFixture<DashboardCotizacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardCotizacionesComponent]
    });
    fixture = TestBed.createComponent(DashboardCotizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
