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
import { TechnologiesModule} from  '../technologies/technologies.module'

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
        TechnologiesModule
    ],
    exports: [
        WebsiteListComponent,
        WebsiteDetailsComponent
    ],
  declarations: [WebsiteListComponent, WebsiteDetailsComponent]
})
export class WebSitesModule { }
