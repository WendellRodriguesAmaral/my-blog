import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  exitModal!: number;

  @Input()
  isPostsError!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  publish(event:any){
    this.exitModal = event;
  }

}
