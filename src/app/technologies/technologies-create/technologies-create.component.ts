import { Component, OnInit, NgZone, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Technologies } from '../technologies';
import { ToastrService } from 'ngx-toastr';
import { TechnologiesService } from '../technologies.service';


@Component({
  selector: 'app-technologies-create',
  templateUrl: './technologies-create.component.html',
  styleUrls: ['./technologies-create.component.css']
})
export class TechnologiesCreateComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private ngZone: NgZone, private technologiesService: TechnologiesService,
    private toastrService: ToastrService) { }

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  tech:Technologies;

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
    createTechnology(): Technologies {

      this.technologiesService.createTechnology(this.tech)
        .subscribe((tech) => {
          this.tech = tech;
          this.create.emit(); //this.create.emit(); //No se si es con () o sin ()
          this.toastrService.success("La tecnologia fue creada con éxito", "Technology creation");
        }, err => {
          this.toastrService.error(err, "Error");
        });
      return this.tech;
  
  
    }
  
  
    /**
       * Informs the parent component that the user no longer wants to create an editorial
       */
    cancelCreation(): void {
      this.cancel.emit(); //this.cancel.emit(); //No se si es con () o sin ()
    }

  ngOnInit() {
    this.tech = new Technologies();
  }
}
