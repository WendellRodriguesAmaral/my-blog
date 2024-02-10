import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  exitModal!: number;

  constructor() { }

  ngOnInit(): void {
  }

  publish(event:any){
    console.log("evento:",event);
    this.exitModal = event;
  }

}
