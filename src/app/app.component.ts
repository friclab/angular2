import { AuthEvent } from './models/authEvent';
import { User } from './models/user';
import { UserService } from './services/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  //oppure scrivere direttamente l'html
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User = null;
  isLoggedIn: boolean = false;

  constructor(
    private userService: UserService, 
    private router: Router
  ) {
    this.isLoggedIn = userService.isLoggedIn();
    this.user = userService.getUser();
    userService.$loginStream.subscribe((authEvent: AuthEvent) => {
      this.isLoggedIn = userService.isLoggedIn();
      this.user = userService.getUser();
    })
  }


  logout() {
    this.userService.logout();
    this.router.navigate(["/login"]);
  }
}
