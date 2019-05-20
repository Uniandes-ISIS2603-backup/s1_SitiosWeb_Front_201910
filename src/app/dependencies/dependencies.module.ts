import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependenciesDetailComponent } from './dependencies-detail/dependencies-detail.component';
import { DependenciesCreateComponent } from './dependencies-create/dependencies-create.component';
import { DependenciesService } from './dependencies.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatMenuModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DependenciesListComponent } from './dependencies-list/dependencies-list.component';
import { DependenciesEditComponent } from './dependencies-edit/dependencies-edit.component';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatStepperModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatMenuModule,
        RouterModule,

    ],
    declarations: [DependenciesDetailComponent, DependenciesCreateComponent, DependenciesListComponent, DependenciesEditComponent],
    entryComponents: [DependenciesCreateComponent],
    providers: [DependenciesService],
    exports: [DependenciesDetailComponent, DependenciesCreateComponent, DependenciesListComponent, DependenciesEditComponent]
})
export class DependenciesModule { }