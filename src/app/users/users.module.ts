import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../app-routing/app-routing.module';

import { UsersListComponent } from './users-list/users-list.component';
import { UsersService } from './users.service';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersCreateComponent } from './users-create/users-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {MatButtonModule, MatFormFieldModule, MatInputModule, MatStepperModule} from '@angular/material';
@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        MatFormFieldModule,
        MatButtonModule,
        MatStepperModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
    ],
  declarations: [UsersListComponent, UsersDetailComponent, UsersCreateComponent],
  providers: [UsersService],
  exports: [UsersListComponent, UsersDetailComponent, UsersCreateComponent]
})
export class UsersModule { }
