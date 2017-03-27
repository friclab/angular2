import { Router } from '@angular/router';
import { AuthEvent } from './../../models/authEvent';
import { UserService } from './../../services/user.service';
import { LoginCredentials } from './../../models/loginCredentials';
import { Component } from '@angular/core'
@Component({
    selector: "login",
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    authEvent: AuthEvent = {
        status: null,
        message: null,
        eventType: null
    };

    constructor(
        private userService: UserService,    //singleton late binding
        private router: Router
    ) { }

    credentials: LoginCredentials = {
        username: "",
        password: ""
    }

    onSubmit(): void {
        this.authEvent = {
            status: null,
            message: null,
            eventType: null
        };
        this.userService.login(this.credentials).subscribe((loginResult) => {
            this.authEvent = loginResult;
            if (this.authEvent.status === "ok") {
                this.router.navigate(["/dashboard"]);
            }
            //console.log("Login fatto ", loginResult);
        })
        //nel mondo reale chiamo un service
        // console.log("Faccio il login ", this.credentials);
    }
} 