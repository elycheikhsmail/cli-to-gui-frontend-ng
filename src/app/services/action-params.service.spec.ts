import { TestBed } from '@angular/core/testing';

import { ActionParamsService } from './action-params.service';

describe('ActionParamsService', () => {
  let service: ActionParamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionParamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
