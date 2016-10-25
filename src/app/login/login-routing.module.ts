import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

import { AuthGuard } from '../core/auth/auth-guard.service';
import { AuthService } from '../core/auth/auth.service';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'login', component: LoginComponent }
        ])
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard,
        AuthService
    ]
})
export class LoginRoutingModule { }
