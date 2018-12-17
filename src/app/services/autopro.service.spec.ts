import { TestBed } from '@angular/core/testing';

import { AutoproService } from './autopro.service';

describe('AutoproService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutoproService = TestBed.get(AutoproService);
    expect(service).toBeTruthy();
  });
});
