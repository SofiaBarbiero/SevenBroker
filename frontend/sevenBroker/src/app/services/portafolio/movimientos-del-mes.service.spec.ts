import { TestBed } from '@angular/core/testing';

import { MovimientosDelMesService } from './movimientos-del-mes.service';

describe('MovimientosDelMesService', () => {
  let service: MovimientosDelMesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovimientosDelMesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
