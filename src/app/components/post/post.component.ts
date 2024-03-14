import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'blog-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnChanges {

  @Input() post!: Post;

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
  }

  /**
   * Serve para verificar se a url da imagem é válida
   * @param changes 
   */
  ngOnChanges(changes: SimpleChanges): void {

    console.log(this.post);
    
    if (changes.post) {
      this.http.get(this.post.image!).subscribe(
        () => { },
        (error) => {
          if (error.status === 0) {
            this.post.image = '';
          }
        });
    }
  }

}
