import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPortafolioComponent } from './dashboard-portafolio.component';

describe('DashboardPortafolioComponent', () => {
  let component: DashboardPortafolioComponent;
  let fixture: ComponentFixture<DashboardPortafolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPortafolioComponent]
    });
    fixture = TestBed.createComponent(DashboardPortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
