import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post:any;

  constructor() { }

  ngOnInit(): void {
  }

}
