import { TestBed } from '@angular/core/testing';

import { NewsTestService } from './news-test.service';

describe('NewsTestService', () => {
  let service: NewsTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
