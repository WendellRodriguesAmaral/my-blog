import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {
  posts!: Array<Post>;
  

  constructor() { }

  ngOnInit(): void {
  }

  receivePosts(posts: Post[]): void {
    this.posts = posts;
  }
  

}
