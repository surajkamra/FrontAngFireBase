import { TestBed } from '@angular/core/testing';

import { SelectedServiceService } from '../../Services/miscelleneous/selected-service.service';

describe('SelectedServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedServiceService = TestBed.get(SelectedServiceService);
    expect(service).toBeTruthy();
  });
});
