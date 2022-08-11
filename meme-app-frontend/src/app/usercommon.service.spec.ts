import { TestBed } from '@angular/core/testing';

import { UsercommonService } from './usercommon.service';

describe('UsercommonService', () => {
  let service: UsercommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsercommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
