import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPostComponent } from './components/new-post/new-post.component';
import { FeedComponent } from './components/feed/feed.component';

const routes: Routes = [
  {
    path: '', component: FeedComponent   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
