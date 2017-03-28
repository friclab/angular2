import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: "home-page",
    templateUrl: "./homepage.component.html",
    styleUrls: ['./homepage.component.css']
})
export class HomePageComponent {
    text:string = "puppa il lillo 1 puppa il lillo 2 puppa il lillo 3 puppa il lillo 4 puppa il lillo 5";
}