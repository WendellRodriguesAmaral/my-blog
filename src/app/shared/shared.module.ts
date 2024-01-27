import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { VMessageComponent } from './components/v-message/v-message.component';


@NgModule({
  declarations: [
    ModalComponent,
    VMessageComponent,  
  ],
  exports: [
    ModalComponent,
    VMessageComponent,  

  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
