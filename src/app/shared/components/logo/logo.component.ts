import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-logo',
  template: `
      <a class="navbar-brand" routerLink="/">
       <span>Dev</span>_Blog
      </a>
      `,

  styles: [`
    .navbar-brand {
      font-size: 2rem;
      font-family: "Courier New", Courier, monospace;
      background-color: transparent;
    }

    span{
      color: #507DBC;
      background-color: transparent;
      font-family: serif;
      font-weight: bold;
    }
  `]
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
