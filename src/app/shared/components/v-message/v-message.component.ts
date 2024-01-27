import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-v-message',
  templateUrl: './v-message.component.html',
  styleUrls: ['./v-message.component.scss']
})
export class VMessageComponent implements OnInit {
  @Input()
  message!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
