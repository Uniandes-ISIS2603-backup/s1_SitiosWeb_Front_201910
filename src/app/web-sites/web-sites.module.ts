import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteListComponent } from './website-list/website-list.component';
import {
    MatButtonModule, MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatRippleModule,
    MatSelectModule, MatSidenavModule,
    MatStepperModule,
    MatTableModule,
    MatTreeModule
} from "@angular/material";
import { WebsiteDetailsComponent } from './website-details/website-details.component';
import { TechnologiesModule} from  '../technologies/technologies.module'
import {WebsiteRelatedListComponent} from "./website-related-list/website-related-list.component";
import {RouterModule} from "@angular/router";
import { WebsiteCreateComponent } from './website-create/website-create.component';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
import {NgxPermissionsModule} from "ngx-permissions";

@NgModule({
    imports: [
        MatDatepickerModule,
        MatNativeDateModule,
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
        RouterModule,
        MatListModule,
        MatRippleModule,
        MatStepperModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatSelectModule,
        MatButtonToggleModule,
        MatSidenavModule,
        NgxPermissionsModule
    ],
    exports: [
        WebsiteListComponent,
        WebsiteDetailsComponent,
        ReactiveFormsModule
    ],
  declarations: [WebsiteListComponent, WebsiteDetailsComponent, WebsiteRelatedListComponent, WebsiteCreateComponent ],
    entryComponents:[WebsiteCreateComponent]
})
export class WebSitesModule { }
