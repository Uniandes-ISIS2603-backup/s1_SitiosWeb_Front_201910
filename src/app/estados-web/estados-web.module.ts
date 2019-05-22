import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadosWebListComponent } from './estados-web-list/estados-web-list.component';
import { EstadosWebCreateComponentComponent } from './estados-web-create-component/estados-web-create-component.component';
import {MatInputModule, MatSelectModule, MatTableModule} from "@angular/material";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        FormsModule,
        MatSelectModule,
        MatInputModule
    ], exports: [
        EstadosWebListComponent,
        EstadosWebCreateComponentComponent
    ],
  declarations: [EstadosWebListComponent, EstadosWebCreateComponentComponent]
})
export class EstadosWebModule { }
