import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangesCreateComponent } from './changes-create/changes-create.component';
import { ChangesListComponent } from './changes-list/changes-list.component';
import { ChangesService } from './changes.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChangesCreateComponent, ChangesListComponent],
  providers: [ChangesService],
  exports: [ChangesCreateComponent, ChangesListComponent]
})
export class ChangesModule { }
