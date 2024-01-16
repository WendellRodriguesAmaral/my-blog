import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'blog-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:any[] = [];
  constructor(private service:PostsService) { }

  ngOnInit(): void {
    this.getPosts();
   
  }

  getPosts(){
    this.service.getPosts().subscribe((data:any)=>{
      this.posts = data     
    })
  }


}
