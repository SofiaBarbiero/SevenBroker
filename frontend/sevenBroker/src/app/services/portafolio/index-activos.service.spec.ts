import { TestBed } from '@angular/core/testing';

import { IndexActivosService } from './index-activos.service';

describe('IndexActivosService', () => {
  let service: IndexActivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexActivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
