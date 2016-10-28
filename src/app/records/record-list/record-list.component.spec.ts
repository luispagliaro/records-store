/* tslint:disable:no-unused-variable */

import { inject } from '@angular/core/testing';
import { Router } from '@angular/router';

import { RecordService } from '../../core/records/record.service';

import { RecordListComponent } from './record-list.component';

describe('Component: RecordList', () => {
    it('should create an instance', () => {
        inject([RecordService, Router], (recordService: RecordService, router: Router) => {
            let component = new RecordListComponent(recordService, router);
            expect(component).toBeTruthy();
        });
    });
});
