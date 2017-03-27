import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { CanActivate } from '@angular/router';

@Injectable()
export class AlreadyAuthGuard implements CanActivate {

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    canActivate(): boolean {
        console.log("canActivate...");
        if (this.userService.isLoggedIn()) {
            this.router.navigate(["/dashboard"]);
            return false;
        }
        return true;
    }
}