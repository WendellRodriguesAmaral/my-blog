import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewPost } from 'src/app/shared/models/new-post.model';
import { Post } from 'src/app/shared/models/post.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = environment.url;

  constructor(private http: HttpClient) {}

  getPosts():Observable<Post[]>{ 
    return this.http.get<Post[]>(this.url+'/posts');
  }

  createPost(post:NewPost):Observable<Post[]>{
    console.log("tentando criar post");

    post.date = new Date();
    post.author= "teste";
    console.log("Tentando enviar este post:", post);
    
    
    return this.http.post<Post[]>(this.url+'/posts',post);
  }

  
}
