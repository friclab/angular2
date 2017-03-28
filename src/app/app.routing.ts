import { RegistrationComponent } from './components/registration/registration.component';
import { AlreadyAuthGuard } from './services/alreadyAuthGuard.service';
import { AuthGuard } from './services/authguard.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule, Routes } from "@angular/router"
import { LoginComponent } from "./components/login/login.component"
import { HomePageComponent } from "./components/homepage/homepage.component"
import { PageNotFoundComponent } from "./components/pagenotfound/pagenotfound.component"


const appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'login', component: LoginComponent, canActivate: [AlreadyAuthGuard] },
    { path: 'register', component: RegistrationComponent, canActivate: [AlreadyAuthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: '**', component: PageNotFoundComponent }

];

export const routes = RouterModule.forRoot(appRoutes); 
