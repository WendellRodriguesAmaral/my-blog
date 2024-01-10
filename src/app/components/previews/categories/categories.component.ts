import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  //será um enum
  categories:string[] = ["Familia", "Natureza", "Esportes","Design", "Lazer", "Tecnologia", "Ciência", "Vida", "Religioso", "Ciência", "Curiosidade", "Politica", "Trabalho", "Pessoas"];

  constructor() { }

  ngOnInit(): void {
  }

}
