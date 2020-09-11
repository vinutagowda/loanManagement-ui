import { TestBed } from '@angular/core/testing';

import { UrlpermissionService } from './urlpermission.service';

describe('UrlpermissionService', () => {
  let service: UrlpermissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlpermissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
