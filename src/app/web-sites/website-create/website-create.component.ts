import {MatBottomSheetRef} from "@angular/material";
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ValidationService } from '../../validation/validation.service';
import {Website} from "../website";
import {WebsiteService} from "../website.service";
import {MatDatepickerInputEvent} from '@angular/material/datepicker';


@Component({
  selector: 'app-website-create',
  templateUrl: './website-create.component.html',
  styleUrls: ['./website-create.component.css']
})
export class WebsiteCreateComponent implements OnInit {

  constructor(private websiteService: WebsiteService,private bottomSheetRef: MatBottomSheetRef<WebsiteCreateComponent>,private _formBuilder: FormBuilder) {}

  firstFormGroup: FormGroup;


  newSite :Website;

  ngOnInit() {
    this.newSite=new Website(0,0,"","","","","","");
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      url: ['', [Validators.required,ValidationService.urlValidator]],
      description: ['', [Validators.required,Validators.minLength(50)]],
      purpose: ['', [Validators.required,Validators.minLength(20)]],
      chosenDate: ['', Validators.required],
      audience: ['', Validators.required],
    });


  }


  crearSitio() {
    let sitioAdd :Website;
    sitioAdd=new Website(this.newSite.audienciaEsperada,0,this.newSite.descripcion,null,this.newSite.url,this.newSite.nombre,this.newSite.proposito,this.newSite.url);
    this.websiteService.createSite(sitioAdd).subscribe(value => {
      console.log(value);
    });
  }

  changedDate(event: MatDatepickerInputEvent<any>) {
    this.newSite.fechaLanzamiento=event.value;
  }
}
