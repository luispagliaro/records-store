import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ManageRecordsComponent } from './manage-records.component';

import { AuthGuard } from '../core/auth/auth-guard.service';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AdminComponent,
                canActivate: [AuthGuard],
                children: [
                    {
                        path: '',
                        canActivateChild: [AuthGuard],
                        children: [
                            { path: '', component: ManageRecordsComponent }
                        ]
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }