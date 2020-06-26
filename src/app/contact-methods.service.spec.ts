import { TestBed } from '@angular/core/testing';

import { ContactMethodsService } from './contact-methods.service';

describe('ContactMethodsService', () => {
  let service: ContactMethodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactMethodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
