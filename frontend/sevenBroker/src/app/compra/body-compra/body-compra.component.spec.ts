import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCompraComponent } from './body-compra.component';

describe('BodyCompraComponent', () => {
  let component: BodyCompraComponent;
  let fixture: ComponentFixture<BodyCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyCompraComponent]
    });
    fixture = TestBed.createComponent(BodyCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
