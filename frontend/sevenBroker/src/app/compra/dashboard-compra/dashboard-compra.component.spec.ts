import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCompraComponent } from './dashboard-compra.component';

describe('DashboardCompraComponent', () => {
  let component: DashboardCompraComponent;
  let fixture: ComponentFixture<DashboardCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardCompraComponent]
    });
    fixture = TestBed.createComponent(DashboardCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
