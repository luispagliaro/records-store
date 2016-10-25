import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService } from './core/in-memory-data.service';
import './rxjs-extensions';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { RecordsModule } from './records/records.module';
import { AdminModule } from './admin/admin.module';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { LoginRoutingModule }   from './login/login-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        CoreModule,
        AppRoutingModule,
        LoginRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
