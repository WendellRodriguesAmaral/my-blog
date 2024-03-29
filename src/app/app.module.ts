import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { FeedComponent } from './components/feed/feed.component';
import { ContentsComponent } from './components/contents/contents.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { FormComponent } from './components/new-post/form/form.component';
import {HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { PreviewsModule } from './components/previews/previews.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoComponent } from './shared/components/logo/logo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewPostComponent,
    FeedComponent,
    ContentsComponent,
    PostsComponent,
    PostComponent,
    FormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PreviewsModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
