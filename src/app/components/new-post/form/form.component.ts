import { PostsService } from 'src/app/core/services/posts.service';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categories } from 'src/app/shared/enums/categories.enum';
import { Post } from 'src/app/shared/models/post.model';
import { NewPost } from 'src/app/shared/models/new-post.model';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'blog-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  categories = Categories;
  postFormGrupo!: FormGroup
  loading: boolean = false;

  @Output() publisherPost = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private service: PostsService) { }

  ngOnInit(): void {

    this.postFormGrupo = this.formBuilder.group({
      title:
        ['',
          [
            Validators.required,
            Validators.maxLength(30),
            Validators.minLength(3)
          ]
        ],
      image: ['',
        [
          Validators.pattern('^(https?://(?:[^.]+\.){2,}).*'),
          Validators.maxLength(255)
        ]
      ],
      text:
        ['',
          [
            Validators.required,
            Validators.maxLength(500),
            Validators.minLength(3)
          ]
        ],
      category: [Categories.Outros],
      privacy: ['publico']
    })


  }

  getCategories() {
    return Object.values(this.categories);
  }

  publishNewPost() {
    console.log(this.postFormGrupo.getRawValue())
    this.loading = true

    const newPost = this.postFormGrupo.getRawValue() as NewPost

    this.service.createPost(newPost)
    .pipe(finalize(() => this.loading = false))
      .subscribe((res: Post[]) => {
        console.log("RETORNO", res)
        this.service.refreshPosts(res)
        this.publisher(res.length); 
      },
        (err) => {
          console.error(err) //ANALISAR O QUE FAZER AQUI
        }
      )
  }


  publisher(res:number){
    this.postFormGrupo.get("title")?.reset();
    this.postFormGrupo.get("image")?.reset();
    this.postFormGrupo.get("text")?.reset();
    this.postFormGrupo.get("category")?.setValue(Categories.Outros);
    this.postFormGrupo.get("privacy")?.setValue('public');
    this.publisherPost.emit(res);
  }

}
