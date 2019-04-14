import { Component, OnInit, NgZone, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Admin } from '../admin';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {

  constructor(
    private adminService: AdminService,
    private toastrService: ToastrService,
    private router: Router
) {}

/**
* The new book
*/
admin: Admin;

nombreCargos = ["Responsable", "Dueño", "Encargado"];


/**
* Cancels the creation of the new book
* Redirects to the books' list page
*/
cancelCreation(): void {
    this.toastrService.warning('The admin wasn\'t created', 'Admin creation');
}

/**
* Creates a new book
*/
createAdmin(): Admin {
    if( this.admin.nombreCargo == "Responsable" ){
        this.admin.nivel=1;
    } 
    else if( this.admin.nombreCargo == "Dueño" ){
        this.admin.nivel=3;
    }
    else if( this.admin.nombreCargo == "Encargado" ){
        this.admin.nivel=2;
    }
    this.adminService.createAdmin(this.admin)
        .subscribe(book => {
            this.admin.id = book.id;
            this.router.navigate(['/admin/' + book.id]);
        }, err => {
            this.toastrService.error(err, 'Error');
        });
    return this.admin;
}

/**
* This function will initialize the component
*/
ngOnInit() {
    this.admin = new Admin();
}

}