import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewsComponent } from './previews.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CategoriesComponent } from './categories/categories.component';
import { AnotherPostsComponent } from './another-posts/another-posts.component';
import { AnnouncementComponent } from './announcement/announcement.component';

@NgModule({
  declarations: [
    PreviewsComponent,
    PerfilComponent,
    CategoriesComponent,
    AnotherPostsComponent,
    AnnouncementComponent
  ],
  exports:[
    PreviewsComponent,
    CategoriesComponent,
    AnotherPostsComponent,
    AnnouncementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PreviewsModule { }
