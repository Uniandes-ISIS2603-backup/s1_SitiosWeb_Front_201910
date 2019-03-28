import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadosWebListComponent } from './estados-web-list/estados-web-list.component';

@NgModule({
  imports: [
    CommonModule
  ],exports: [
    EstadosWebListComponent
  ],
  declarations: [EstadosWebListComponent]
})
export class EstadosWebModule { }
