import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteListComponent } from './website-list/website-list.component';
import {
    MatButtonModule,
    MatCardModule,
    MatChipsModule, MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule, MatTreeModule
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
        MatGridListModule,
        MatTreeModule,
        MatExpansionModule
    ],
    exports: [
        WebsiteListComponent,
        WebsiteDetailsComponent
    ],
  declarations: [WebsiteListComponent, WebsiteDetailsComponent]
})
export class WebSitesModule { }
