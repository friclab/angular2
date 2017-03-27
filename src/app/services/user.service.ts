import { LoginResult } from './../models/loginResult';
import { User } from './../models/user';
import { LoginCredentials } from './../models/loginCredentials';

import { Injectable, EventEmitter } from "@angular/core"
@Injectable()
export class UserService {

    private currentUser: User = JSON.parse(localStorage.getItem("user"));

    public login(credentials: LoginCredentials): EventEmitter<LoginResult> {
        let loginResultObserver = new EventEmitter<LoginResult>();

        setTimeout(() => {
            if (credentials.username === "marco" && credentials.password === "marco") {
                this.currentUser = {
                    username: credentials.username
                };
                localStorage.setItem("user", JSON.stringify(this.currentUser));
                loginResultObserver.emit({
                    status: "ok",
                    message: "login successfully",
                    user: this.currentUser
                });
            }else{
                loginResultObserver.emit({
                    status: "ko",
                    message: "login error",
                    user: this.currentUser
                });
            }

        }, 1000)

        return loginResultObserver;
    }

    public logout() {
        this.currentUser = null;
        localStorage.removeItem("user");
    }

    public isLoggedIn(): boolean {
        return this.currentUser !== null;
    }
}