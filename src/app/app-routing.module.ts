import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth/auth-guard.service';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'records',
                loadChildren: 'app/records/records.module#RecordsModule'
            },
            {
                path: 'admin',
                loadChildren: 'app/admin/admin.module#AdminModule',
                canLoad: [AuthGuard]
            }
        ],
            { preloadingStrategy: PreloadAllModules }
        )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }