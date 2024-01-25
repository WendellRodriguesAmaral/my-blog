import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/shared/enums/categories.enum';

@Component({
  selector: 'blog-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories = Categories;

  constructor() { }

  ngOnInit(): void {
    
  }

  getCategories(){
    return Object.values(this.categories); 
  }

}
