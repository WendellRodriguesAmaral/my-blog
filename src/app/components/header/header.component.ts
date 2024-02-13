import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subject } from 'rxjs';
import { PostsService } from 'src/app/core/services/posts.service';


@Component({
  selector: 'blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faArrowRight = faArrowRight;
  search:string='';
  noFilter!: Observable<any>;
  
  constructor(private service:PostsService) { }

  ngOnInit(): void {
    this.noFilter = this.service.noFilterEvent();
    this.noFilter.subscribe(() => {
      this.search = '';
    });
  }

  searchPosts(search:string){
    this.service.getPostsBySearch(search).subscribe((posts)=>{
      this.service.undoFilter(false);
      this.service.refreshPosts(posts);  
      this.service.searchingEmit({search, searching:true}); 
    })
  }

}
