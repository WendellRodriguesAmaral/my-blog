import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from 'src/app/core/services/posts.service';
import { Categories } from 'src/app/shared/enums/categories.enum';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {
  Anotherposts!: Array<Post>;
  searching: boolean = false;
  search!:string; 
  searching$!: Observable<any>;
  filterByCategory$!: Observable<any>;
  filterByCategory:boolean = false;
  category!:Categories;

  constructor(private service:PostsService) { }

  ngOnInit(): void {
    this.searching$ = this.service.searchingEvent();
    this.searching$.subscribe((searching) => {
      this.searching = searching.searching;
      this.search = searching.search;
    });

    this.filterByCategory$ = this.service.filterByCategoryEvent();
    this.filterByCategory$.subscribe((filter) => {
      this.filterByCategory = filter.filterByCategory;
      this.category = filter.category;
    });

  }

  receivePosts(Anotherposts: Post[]): void {
    this.Anotherposts = Anotherposts;
    console.log("receive posts chamado");
    
  }  

  undoFilter(getAllPosts: boolean): void {
    this.service.undoFilter(getAllPosts);
  }

}
