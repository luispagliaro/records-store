/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecordSearchService } from './record-search.service';

describe('Service: RecordSearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecordSearchService]
    });
  });

  it('should ...', inject([RecordSearchService], (service: RecordSearchService) => {
    expect(service).toBeTruthy();
  }));
});
