import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { VMessageComponent } from './components/v-message/v-message.component';
import { LogoComponent } from './components/logo/logo.component';


@NgModule({
  declarations: [
    ModalComponent,
    VMessageComponent,   
    LogoComponent   
  ],
  exports: [
    ModalComponent,
    VMessageComponent,  
    LogoComponent

  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
