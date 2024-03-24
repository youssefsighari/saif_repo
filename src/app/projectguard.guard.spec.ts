import { TestBed } from '@angular/core/testing';

import { ProjectguardGuard } from './projectguard.guard';

describe('ProjectguardGuard', () => {
  let guard: ProjectguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProjectguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
