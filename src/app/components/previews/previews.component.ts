import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'blog-previews',
  templateUrl: './previews.component.html',
  styleUrls: ['./previews.component.scss']
})
export class PreviewsComponent implements OnInit {
  @Input()
  isPostsError!: boolean;

  @Input()
  Anotherposts!: Post[];

  constructor() { }

  ngOnInit(): void {
    this.Anotherposts = [];
    console.log(this.Anotherposts.length);    
  }

}
