import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologiesListComponent } from './technologies-list/technologies-list.component';
import { TechnologiesDetailComponent } from './technologies-detail/technologies-detail.component';
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
    declarations: [TechnologiesListComponent, TechnologiesDetailComponent],
    providers: [TechnologiesService],
    exports:[TechnologiesListComponent, TechnologiesDetailComponent]
})
export class TechnologiesModule {}