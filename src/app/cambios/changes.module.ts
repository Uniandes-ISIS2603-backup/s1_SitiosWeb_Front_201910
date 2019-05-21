import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangesCreateComponent } from './changes-create/changes-create.component';
import { ChangesListComponent } from './changes-list/changes-list.component';
import { ChangesService } from './changes.service';
import { MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
  ],
  declarations: [ChangesCreateComponent, ChangesListComponent],
  providers: [ChangesService],
  exports: [ChangesCreateComponent, ChangesListComponent]
})
export class ChangesModule { }
