import { TestBed } from '@angular/core/testing';

import { LoaderssService } from './loaderss.service';

describe('LoaderssService', () => {
  let service: LoaderssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
