import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologiesListComponent } from './technologies-list/technologies-list.component';
import { TechnologiesDetailComponent } from './technologies-detail/technologies-detail.component';
import { TechnologiesCreateComponent } from './technologies-create/technologies-create.component';
import { TechnologiesService } from './technologies.service';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatFormFieldModule,MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
@NgModule({
    imports: [       
        CommonModule,
        FormsModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
    ],
    declarations: [TechnologiesListComponent, TechnologiesDetailComponent, TechnologiesCreateComponent],
    providers: [TechnologiesService],
    exports:[TechnologiesListComponent, TechnologiesDetailComponent, TechnologiesCreateComponent]
})
export class TechnologiesModule {}