import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteListComponent } from './website-list/website-list.component';
import {
    MatButtonModule,
    MatCardModule,
    MatChipsModule, MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule, MatTableModule, MatTreeModule
} from "@angular/material";
import { WebsiteDetailsComponent } from './website-details/website-details.component';
import { TechnologiesModule} from  '../technologies/technologies.module'
import {WebsiteRelatedListComponent} from "./website-related-list/website-related-list.component";
import {RouterModule} from "@angular/router";

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
        MatExpansionModule,
        TechnologiesModule,
        MatTableModule,
        RouterModule
    ],
    exports: [
        WebsiteListComponent,
        WebsiteDetailsComponent
    ],
  declarations: [WebsiteListComponent, WebsiteDetailsComponent, WebsiteRelatedListComponent]
})
export class WebSitesModule { }
