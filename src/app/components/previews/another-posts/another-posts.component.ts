import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from 'src/app/core/services/posts.service';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'blog-another-posts',
  templateUrl: './another-posts.component.html',
  styleUrls: ['./another-posts.component.scss']
})
export class AnotherPostsComponent implements OnInit, OnChanges {
  @Input()
  posts!: Post[];


  constructor(private service: PostsService) { }


  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes.posts.firstChange){
      console.log(changes.posts);
      console.log(this.posts);
      this.posts = this.posts.slice(1, 6 || this.posts.length);     
    }
  }

}
