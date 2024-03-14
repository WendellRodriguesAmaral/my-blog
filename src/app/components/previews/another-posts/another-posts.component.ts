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

  searchingYet: boolean = true;


  private maxAnotherPosts: number = 5;


  constructor(private service: PostsService) { }


  ngOnInit(): void {
    this.Anotherposts = [];   
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes.Anotherposts.firstChange){      
      this.Anotherposts = this.randomPosts(this.Anotherposts);     
    }
  }

  private randomPosts(posts:Post[]): Post[] {
    let randomPosts: Post[] = [];
    this.searchingYet = false;
    console.log('searchingYet', this.searchingYet);
    if(posts.length > 0){

      if(posts.length < this.maxAnotherPosts){
        return posts;
      }

      for (let i = 0; i < this.maxAnotherPosts; i++) {
        let randomIndex = Math.floor(Math.random() * posts.length);
        randomPosts.push(posts[randomIndex]);
      }
    }
    return randomPosts;
  }

  showPost(post:Post){
    this.service.undoFilter(false);
    this.service.refreshPosts([post]);    
    this.service.selectedAnotherPostEmit(true); 
  }

}
