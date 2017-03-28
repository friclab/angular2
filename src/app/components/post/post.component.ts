import { PostService } from './../../services/post.service';
import { Component, OnInit, OnDestroy } from "@angular/core"
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-registration',
    templateUrl: "./post.component.html",
    styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit, OnDestroy {

    postId;
    sub;
    post;


    constructor(
        private router: ActivatedRoute,
        private postService: PostService
    ) {

    }

    ngOnInit() {
        /* console.log(this.router.snapshot.params);
         this.sub = this.router.params.subscribe(params => {
             this.postId = +params['id'];
             this.post = this.postService.getById(this.postId);
         })
 */
        let postId = +this.router.snapshot.params['id'];
        //let postId = +this.router.snapshot.params.id;

        this.postService.getById(postId)
            .then(post => {
                this.post = post;
                console.log(post);
            })
            .catch(err => {
                console.error("si è schiantato", err);
            });
    }

    ngOnDestroy() {
        //   this.sub.unsubscribe();
    }
}

