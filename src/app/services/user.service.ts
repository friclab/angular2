import { AuthEvent } from './../models/authEvent';
import { User } from './../models/user';
import { LoginCredentials } from './../models/loginCredentials';

import { Injectable, EventEmitter } from "@angular/core"
@Injectable()
export class UserService {

    private currentUser: User = JSON.parse(localStorage.getItem("user"));

    public $loginStream = new EventEmitter<AuthEvent>();

    public login(credentials: LoginCredentials): EventEmitter<AuthEvent> {

        setTimeout(() => {
            if (credentials.username === "marco" && credentials.password === "marco") {
                this.currentUser = {
                    username: credentials.username
                };
                localStorage.setItem("user", JSON.stringify(this.currentUser));
                this.$loginStream.emit({
                    status: "ok",
                    message: "login successfully",
                    eventType: "login",
                    user: this.currentUser
                });
            } else {
                this.$loginStream.emit({
                    status: "ko",
                    message: "login error",
                    eventType: "login",
                    user: this.currentUser
                });
            }

        }, 1000)

        return this.$loginStream;
    }

    public logout() {
        this.currentUser = null;
        localStorage.removeItem("user");
        this.$loginStream.emit({
            status: "ok",
            message: "logout successfully",
            eventType: "logout",
            user: this.currentUser
        });
        return this.$loginStream;
    }

    public isLoggedIn(): boolean {
        return this.currentUser !== null;
    }

    public getUser() {
        return this.currentUser;
    }
}