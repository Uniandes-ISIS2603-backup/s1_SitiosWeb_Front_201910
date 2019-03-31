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
import { WebsiteDetailsComponent } from './website-details/website-details.component';

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
        WebsiteListComponent,
        WebsiteDetailsComponent
    ],
  declarations: [WebsiteListComponent, WebsiteDetailsComponent]
})
export class WebSitesModule { }
