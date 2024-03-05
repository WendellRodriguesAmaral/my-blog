import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Categories } from 'src/app/shared/enums/categories.enum';
import { NewPost } from 'src/app/shared/models/new-post.model';
import { Post } from 'src/app/shared/models/post.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = environment.url;
  private postsSubject = new BehaviorSubject<Post[]>([]);
  searching:Subject<any> = new Subject();
  category:Subject<any> = new Subject();
  selectedAnotherPost:Subject<any> = new Subject();
  noFilter:Subject<any> = new Subject();

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

  getPostsBySearch(search:string):Observable<Post[]>{
    const params = new HttpParams().set('search',search);
    return this.http.get<Post[]>(this.url+'/posts',{params});  
  }

  getPostsByCategory(category:Categories){    
    return this.http.get<Post[]>(this.url+'/posts/category/'+category);
  }



  getselectedAnotherPostEvent(){
    return this.selectedAnotherPost.asObservable();
  }

  selectedAnotherPostEmit(selectedAnotherPost:boolean){
    this.selectedAnotherPost.next(selectedAnotherPost);
  }


  getPostsUpdated(){
    return this.postsSubject.asObservable();
  }

  refreshPosts(posts:Post[]){
    this.postsSubject.next(posts);
  }

  searchingEvent(){
    return this.searching.asObservable();
  }

  searchingEmit(searching:any){
    this.searching.next(searching);   
  }
  
  filterByCategoryEvent(){
    return this.category.asObservable();
  }

  filterByCategoryEmit(category:Object){
    this.category.next(category);   
  }

  undoFilter(getAllPosts:boolean){
    if(getAllPosts){
      this.noFilter.next();//como eu tento limpar os filtros antes de fazer um novo filtro, esse if evita que nao faça outra chamada no back
    }
    
    this.searchingEmit({searching:false,search:""});
    this.filterByCategoryEmit({filterByCategory:false,category:''});
    this.selectedAnotherPostEmit(false);
  }

  noFilterEvent(){
    return this.noFilter.asObservable();
  }   
}
