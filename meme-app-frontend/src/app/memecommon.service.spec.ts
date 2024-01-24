import { TestBed } from '@angular/core/testing';

import { MemecommonService } from './memecommon.service';

describe('MemecommonService', () => {
  let service: MemecommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemecommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
