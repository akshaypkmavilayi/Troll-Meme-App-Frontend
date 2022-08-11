import { TestBed } from '@angular/core/testing';

import { UserbackendService } from './userbackend.service';

describe('UserbackendService', () => {
  let service: UserbackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserbackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
