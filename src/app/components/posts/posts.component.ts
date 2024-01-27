import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/services/posts.service';
import { tap } from 'rxjs/operators';
import { Post } from 'src/app/shared/models/post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'blog-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  loading: boolean = true;
  posts$!: Observable<Post[]>;

  constructor(private service: PostsService) { }

  ngOnInit(): void {
    this.posts$ = this.service.getPostsUpdated();
    this.posts$.subscribe(() => {
      this.getPosts()
    });

    this.getPosts();
  }

  getPosts() {
    this.service.getPosts().pipe(
      tap(() => this.loading = false)
    ).subscribe((posts: Post[]) => {
        this.posts = posts;
      })
  }


}
