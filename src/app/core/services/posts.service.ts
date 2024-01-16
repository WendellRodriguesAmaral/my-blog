import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = environment.url;

  constructor(private http: HttpClient) {}

  getPosts(){
    console.log("Buscando na url: ", this.url);

    return this.http.get(this.url+'/posts');
  }

  createPost(){
    const body = {
      title: 'foo',
      image:"teste",
      text:"teste",
      author:"Wendell",
      date: new Date(),
      category:"teste",
      privacy:"teste",
    }
    console.log("tentando criar post");
    
    return this.http.post(this.url, body);
  }

  
}
