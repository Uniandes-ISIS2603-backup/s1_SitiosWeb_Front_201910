import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependenciesDetailComponent } from './dependencies-detail/dependencies-detail.component';
import { DependenciesCreateComponent } from './dependencies-create/dependencies-create.component';
import { DependenciesService } from './dependencies.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatFormFieldModule, 
         MatInputModule, MatStepperModule, 
         MatButtonModule, MatAutocompleteModule,
         MatSelectModule,
         MatMenuModule, } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DependenciesListComponent } from './dependencies-list/dependencies-list.component';
import { DependenciesEditComponent } from './dependencies-edit/dependencies-edit.component'; 
@NgModule({
    imports: [       
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatStepperModule, 
        MatButtonModule,
        MatMenuModule,
        MatAutocompleteModule,
        MatSelectModule,
        BrowserAnimationsModule
    ],
    declarations: [DependenciesDetailComponent, DependenciesCreateComponent, DependenciesListComponent, DependenciesEditComponent],
    entryComponents: [DependenciesCreateComponent],
    providers: [DependenciesService],
    exports:[DependenciesDetailComponent, DependenciesCreateComponent, DependenciesListComponent, DependenciesEditComponent]
})
export class DependenciesModule {}