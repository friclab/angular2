import { OnInit } from '@angular/core';
import { PostService } from './../../services/post.service';
import { Component } from '@angular/core';



@Component({
    selector: "postlist",
    templateUrl: "./postlist.component.html",
    styleUrls: ['./postlist.component.css']
})
export class PostListComponent implements OnInit {
    data: Array<any> = [];

    constructor(
        private postService: PostService
    ) { }

    ngOnInit(): void {
        // this.data = this.postService.getAll();
        this.postService.getAll().then((data: Array<any>) => {
            console.log("getting  resolve!");
            this.data = data;
        }).catch(err => {
            console.error("errore", err);
        })
    }

}