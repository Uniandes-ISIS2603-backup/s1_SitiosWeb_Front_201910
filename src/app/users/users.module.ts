import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from '../app-routing/app-routing.module';

import { UsersListComponent } from './users-list/users-list.component';
import { UsersService } from './users.service';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersCreateComponent } from './users-create/users-create.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [UsersListComponent, UsersDetailComponent, UsersCreateComponent],
  providers: [UsersService],
  exports: [UsersListComponent, UsersDetailComponent, UsersCreateComponent]
})
export class UsersModule { }
