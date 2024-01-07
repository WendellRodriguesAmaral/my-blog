import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() postTitle: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
