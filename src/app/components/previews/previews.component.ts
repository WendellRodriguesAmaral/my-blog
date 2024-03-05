import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-previews',
  templateUrl: './previews.component.html',
  styleUrls: ['./previews.component.scss']
})
export class PreviewsComponent implements OnInit {
  @Input()
  isPostsError!: boolean;


  constructor() { }

  ngOnInit(): void {
  }

}
