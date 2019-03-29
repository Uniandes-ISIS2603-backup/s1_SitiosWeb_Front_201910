import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteListComponent } from './website-list/website-list.component';
import {
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule
} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatChipsModule,
        MatGridListModule
    ],
  exports: [
    WebsiteListComponent
  ],
  declarations: [WebsiteListComponent]
})
export class WebSitesModule { }
