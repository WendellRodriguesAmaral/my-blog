import { Component, OnInit } from '@angular/core';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faArrowRight = faArrowRight;

  constructor() { }

  ngOnInit(): void {
  }

}
