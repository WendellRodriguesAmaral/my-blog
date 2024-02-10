import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from 'src/app/core/services/posts.service';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {
  posts!: Array<Post>;
  searching: boolean = false;
  searching$!: Observable<any>;
  search!:string;

  constructor(private service:PostsService) { }

  ngOnInit(): void {
    this.searching$ = this.service.searchingEvent();
    this.searching$.subscribe((searching) => {
      this.searching = searching.searching;
      this.search = searching.search;
    });
  }

  receivePosts(posts: Post[]): void {
    this.posts = posts;
  }
  

}
