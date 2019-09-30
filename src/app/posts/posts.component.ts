import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts=[]
  constructor(private http:HttpClient ,public router:Router) {this.getPosts() }

  ngOnInit() {
  }
  getPosts(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(data => {
       
        this.posts.push(data)
        console.log(this.posts)
        this.router.navigate(["/CodeComponent"])
        for(var i=0;i<this.posts.length;i++) {
  
        }
    
      })
  }
  }
  

