import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/services/posts.service';
import { tap, map } from 'rxjs/operators';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'blog-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:Post[] = [];
  loading:boolean = true;

  constructor(private service:PostsService) { }

  ngOnInit(): void {
   this.getPosts();   
  }

  getPosts(){
    this.service.getPosts().pipe(
      tap(() => this.loading = false)
    )
    .subscribe((posts:Post[])=>{      
      this.posts = posts     
    })
  }


}
