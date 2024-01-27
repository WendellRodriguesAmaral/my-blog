import { PostsService } from 'src/app/core/services/posts.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categories } from 'src/app/shared/enums/categories.enum';
import { Post } from 'src/app/shared/models/post.model';
import { NewPost } from 'src/app/shared/models/new-post.model';

@Component({
  selector: 'blog-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  categories = Categories;
  postFormGrupo!: FormGroup

  constructor(private formBuilder: FormBuilder, private service:PostsService) { }

  ngOnInit(): void {
    
    this.postFormGrupo = this.formBuilder.group({
      title:
        ['',
          [
            Validators.required,
            Validators.maxLength(20),
            Validators.minLength(3)
          ]
        ],
      image: ['' , [Validators.pattern('^(https?://(?:[^.]+\.){2,}).*'), Validators.maxLength(255)]],
      text:
        ['',
          [
            Validators.required,
            Validators.maxLength(500),
            Validators.minLength(3)
          ]
        ],
      category: [Categories.Outros],
      privacy: ['public']
    })

    
  }

  getCategories() {
    return Object.values(this.categories);
  }

  publishNewPost() {
    console.log(this.postFormGrupo.getRawValue())

    const newPost = this.postFormGrupo.getRawValue() as NewPost
    
    this.service.createPost(newPost)
    .subscribe((res:Post[]) => {
      console.log("RETORNO",res)
      this.postFormGrupo.get("title")?.setValue('');
      this.postFormGrupo.get("image")?.setValue('');
      this.postFormGrupo.get("text")?.setValue('');
    })
  }

}
