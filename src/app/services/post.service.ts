import { Injectable } from '@angular/core';

const FAKE_DATA = [
    {
        id: 1,
        pic: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS7xhEk_IzaGOVJPyX_DLUmWqrON2L3OVa-A4tHTcVXyaBbKWqxwiio-1s",
        content: "sono il primo contenuto"
    },
    {
        id: 10,
        pic: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS7xhEk_IzaGOVJPyX_DLUmWqrON2L3OVa-A4tHTcVXyaBbKWqxwiio-1s",
        content: "sono il primo contenuto 22"
    },
    {
        id: 100,
        pic: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS7xhEk_IzaGOVJPyX_DLUmWqrON2L3OVa-A4tHTcVXyaBbKWqxwiio-1s",
        content: "sono il primo contenuto 33"
    },
]

@Injectable()
export class PostService {
    private data: Array<any> = FAKE_DATA;

    public getAll() {
        console.log("chiamata a getAll")
        return new Promise((resolve, reject) => {
            console.log("resolve getAll");
            resolve(this.data);
        });
    }

    public getById(id: number) {
        console.log("chiamata a getById", id);
        return new Promise((resolve, reject) => {
            
            for (let index in this.data) {
                let post = this.data[index];
                if (post.id === id) {
                    console.log("resolve getById", id);
                    resolve(post);
                    return;
                }
            } 
            reject("post not found");
            return;
           
        })

    }
}