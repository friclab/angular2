import {RouterModule, Routes} from "@angular/router"
import {LoginComponent} from "./components/login/login.component"
import {HomePageComponent} from "./components/homepage/homepage.component"
import {PageNotFoundComponent} from "./components/pagenotfound/pagenotfound.component"


const appRoutes = [
    {path: '', redirectTo: 'home' , pathMatch:'full'},
    {path: 'home', component: HomePageComponent},
    {path: 'login', component:LoginComponent},
    {path: '**', component: PageNotFoundComponent}
    
]; 

export const routes = RouterModule.forRoot(appRoutes) ; 
