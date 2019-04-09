import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminService } from './admin.service';
import { AdminCreateComponent } from './admin-create/admin-create.component';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminListComponent, AdminCreateComponent, AdminDetailComponent],
  providers: [AdminService],
  exports: [AdminListComponent, AdminCreateComponent, AdminDetailComponent]
})
export class AdminModule { }
