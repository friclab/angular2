import { TruncatePipe } from './pipes/truncate.pipe';
import { AlreadyAuthGuard } from './services/alreadyAuthGuard.service';
import { AuthGuard } from './services/authguard.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { routes } from "./app.routing"

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/homepage/homepage.component'
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component'
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component'
@NgModule({ //contentiore di componenti e servizi
  declarations: [  //componenti che questo modulo fornisce
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    LoginComponent,
    DashboardComponent,
    TruncatePipe,
    RegistrationComponent
  ],
  imports: [   //moduli dai quali dipende
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    ReactiveFormsModule,
    routes

  ],
  providers: [UserService, AuthGuard, AlreadyAuthGuard], //Cosa fornisce solo Service
  bootstrap: [AppComponent]  //componente che fa partire il modulo (punti di accesso)
})
export class AppModule { }
