import { PostService } from './../../../services/post.service';
import { Post } from './../../../models/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts:Post[]=[]
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getPost().subscribe(data=>{
      this.posts = data;
    })
  }

}
