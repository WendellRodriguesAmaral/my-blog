import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PostsService } from 'src/app/core/services/posts.service';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'blog-another-posts',
  templateUrl: './another-posts.component.html',
  styleUrls: ['./another-posts.component.scss']
})
export class AnotherPostsComponent implements OnInit, OnChanges {
  @Input()
  Anotherposts!: Post[];

  @Input()
  isPostsError!: boolean;

  private maxAnotherPosts: number = 5;


  constructor(private service: PostsService) { }


  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes.Anotherposts.firstChange){      
      this.Anotherposts = this.randomPosts(this.Anotherposts);     
    }
  }

  private randomPosts(posts:Post[]): Post[] {
    let randomPosts: Post[] = [];
    for (let i = 0; i < this.maxAnotherPosts; i++) {
      let randomIndex = Math.floor(Math.random() * posts.length);
      randomPosts.push(posts[randomIndex]);
    }
    return randomPosts;
  }

  showPost(post:Post){
    this.service.undoFilter(false);
    this.service.refreshPosts([post]);    
    this.service.selectedAnotherPostEmit(true); 
  }

}
