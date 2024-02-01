import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'blog-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges {

  @Input() postTitle: string = ''
  @Input() exitModal:boolean = false;
  @ViewChild('exitModalButton') exitModalButton! : ElementRef ;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.exitModal) {     
      this.exitModalButton?.nativeElement.click();
    }
  }


}
