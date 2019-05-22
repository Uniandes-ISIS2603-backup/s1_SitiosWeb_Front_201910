import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { ValidationService } from "../../validation/validation.service";
import { AdminDetail } from '../admin-detail';
import { Dependencies } from '../../dependencies/dependencies';


@Component({
    selector: 'app-admin-create',
    templateUrl: './admin-create.component.html',
    styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {
    hide = true;

    constructor(
        private adminService: AdminService,
        private toastrService: ToastrService,
        private router: Router,
        private _formBuilder: FormBuilder
    ) { }

    /**
    * The new book
    */
    admin: AdminDetail;

    nombreCargos = ["Responsable", "Dueño", "Encargado"];
    createUserForm: FormGroup;

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
    createAdmin(): AdminDetail {
        if (this.admin.nombreCargo == "1") {
            this.admin.nivel = 1;
        }
        else if (this.admin.nombreCargo == "2") {
            this.admin.nivel = 3;
        }
        else if (this.admin.nombreCargo == "3") {
            this.admin.nivel = 2;
        }
        this.admin.dependencia = new Dependencies();
        this.admin.notificaciones = [];
        this.admin.sitiosWeb = [];
        this.admin.cambios = [];
        this.admin.id = 101;
        console.log(this.admin);
        this.adminService.createAdmin(this.admin)
            .subscribe(admin => {
                console.log(this.admin)
                this.admin = admin;
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.admin;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.createUserForm = this._formBuilder.group({
            nombre: ['', Validators.required],
            email: ['', [Validators.required, ValidationService.emailValidator]],
            telefono: ['', [Validators.required, Validators.minLength(20)]],
            nombreCargo: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(8)]]
        });
        this.admin = new AdminDetail();
    }
    logValue() {
        console.log("Crear administrador")
        console.log(this.admin)
        console.log(this.createUserForm.getRawValue());
    }
}