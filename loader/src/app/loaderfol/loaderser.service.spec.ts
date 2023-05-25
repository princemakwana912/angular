import { TestBed } from '@angular/core/testing';

import { LoaderserService } from './loaderser.service';

describe('LoaderserService', () => {
  let service: LoaderserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
