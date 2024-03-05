import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PostsService } from 'src/app/core/services/posts.service';
import { debounceTime, finalize, tap } from 'rxjs/operators';
import { Post } from 'src/app/shared/models/post.model';
import { Observable } from 'rxjs';

const TEN_SECONDS = 10000;

@Component({
  selector: 'blog-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  loading: boolean = true;
  posts$!: Observable<Post[]>;
  noFilter!: Observable<any>;
  postSearched: boolean = false;
  moreTenSeconds: boolean = false;
  getPostsError: boolean = false;
  @Output() postEmitter: EventEmitter<Post[]> = new EventEmitter();
  @Output() postErrorEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor(private service: PostsService) { }

  ngOnInit(): void {
    this.posts$ = this.service.getPostsUpdated();
    this.posts$.subscribe((posts) => {
      console.log(posts);

      this.posts = posts.reverse();
    });

    this.noFilter = this.service.noFilterEvent();
    this.noFilter.subscribe(() => {
      this.getPosts();
    });

    this.getPosts();
    this.checksPostMoreTenSeconds();
  }

  private getPosts() {
    this.service.getPosts().pipe(
      finalize(() => this.loading = false)
    ).subscribe((posts: Post[]) => {
      this.posts = posts;
      this.postSearched = true;
      this.postEmitter.emit(posts);
    },
      (error) => {
        this.getPostsError = true; 
        this.postErrorEmitter.emit(this.getPostsError);              
      })
  }

  /**
   * Método que exibe uma mensagem após 10 segundos caso os posts ainda não tenham sido carregados.
   */
  private checksPostMoreTenSeconds() {
    setTimeout(() => {
      this.moreTenSeconds = true;
    }, TEN_SECONDS)
  }



}
