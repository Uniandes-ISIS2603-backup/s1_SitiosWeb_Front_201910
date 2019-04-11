import { Component, OnInit, NgZone, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Admin } from '../admin';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private ngZone: NgZone, private adminService: AdminService,
    private toastrService: ToastrService) { }

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  admin:Admin;

  /**
     * The output which tells the parent component
     * that the user no longer wants to create an user
     */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new user
    */
    @Output() create = new EventEmitter();
  
    /**
     * Creates a new user
     */
    createAdmin(): Admin {
      if( this.admin.nombreCargo === "Responsable" ){
        this.admin.nivel = 2;
      }
      else if( this.admin.nombreCargo === "Dueño" ){
        this.admin.nivel = 3;
      }
      else if( this.admin.nombreCargo === "Supervisor" ){
        this.admin.nivel = 1;
      }
      this.adminService.createUser(this.admin)
        .subscribe((admin) => {
          this.admin = admin;
          this.create.emit(); //this.create.emit(); //No se si es con () o sin ()
          this.toastrService.success("The user was created", "User creation");
        }, err => {
          this.toastrService.error(err, "Error");
        });
      return this.admin;
  
  
    }
  
  
    /**
       * Informs the parent component that the user no longer wants to create an editorial
       */
    cancelCreation(): void {
      this.cancel.emit(); //this.cancel.emit(); //No se si es con () o sin ()
    }

  ngOnInit() {
    this.admin = new Admin();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
  }
}
