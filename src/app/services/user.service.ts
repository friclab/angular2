import { User } from './../models/user';
import { LoginCredentials } from './../models/loginCredentials';

import { Injectable } from "@angular/core"
@Injectable()
export class UserService {

    private currentUser: User = JSON.parse(localStorage.getItem("user"));

    public login(credentials: LoginCredentials) {
        if (credentials.username === "marco" && credentials.password === "marco") {
            this.currentUser = {
                username: credentials.username
            };
            localStorage.setItem("user", JSON.stringify(this.currentUser));
        }
    }

    public logout() {
        this.currentUser = null; 
        localStorage.removeItem("user");
    }

    public isLoggedIn(): boolean {
        return false;
    }
}