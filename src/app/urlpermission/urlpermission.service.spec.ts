import { TestBed } from '@angular/core/testing';
import {  Router, ActivatedRoute, UrlSerializer } from '@angular/router';
import { UrlpermissionService } from './urlpermission.service';

describe('UrlpermissionService', () => {
  let service: UrlpermissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ { provide: Router, useValue: '' }, UrlpermissionService]
    
    });
    service = TestBed.inject(UrlpermissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
