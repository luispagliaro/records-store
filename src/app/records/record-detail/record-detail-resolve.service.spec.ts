/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecordDetailResolveService } from './record-detail-resolve.service';

describe('Service: CrisisDetailResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecordDetailResolveService]
    });
  });

  it('should ...', inject([RecordDetailResolveService], (service: RecordDetailResolveService) => {
    expect(service).toBeTruthy();
  }));
});
