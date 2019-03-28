import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteListComponent } from './website-list/website-list.component';
import {MatCardModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    WebsiteListComponent
  ],
  declarations: [WebsiteListComponent]
})
export class WebSitesModule { }
