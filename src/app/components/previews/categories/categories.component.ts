import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/services/posts.service';
import { Categories } from 'src/app/shared/enums/categories.enum';

@Component({
  selector: 'blog-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories = Categories;

  constructor(private service:PostsService) { }

  ngOnInit(): void {
    
  }

  getCategories(){
    return Object.values(this.categories); 
  }

  filterByCategory(category: Categories){
    this.service.getPostsByCategory(category).subscribe(posts=>{
      this.service.undoFilter(false);
      console.log(posts);

      this.service.refreshPosts(posts);
      this.service.filterByCategoryEmit({category, filterByCategory:true}); 

      console.log(posts);
      
    })
  }

}
