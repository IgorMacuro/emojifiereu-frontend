import { TestBed } from '@angular/core/testing';

import { EmojifyServiceService } from './emojify-service.service';

describe('EmojifyServiceService', () => {
  let service: EmojifyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmojifyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
