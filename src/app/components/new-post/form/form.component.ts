import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categories } from 'src/app/shared/enums/categories.enum';

@Component({
  selector: 'blog-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  categories = Categories;
  postFormGrupo!: FormGroup

  constructor(private formBuilder: FormBuilder) { }

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
      image: [''],
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
  }

}
