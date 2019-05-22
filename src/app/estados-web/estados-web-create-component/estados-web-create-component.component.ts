import { Component,Inject, Input, OnInit } from '@angular/core';
import {EstadosWebService} from "../estados-web.service";
import {WebsiteService} from "../../web-sites/website.service";
import {EstadoWeb} from "../estadoWeb";
import {ActivatedRoute, Params} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-estados-web-create-component',
  templateUrl: './estados-web-create-component.component.html',
  styleUrls: ['./estados-web-create-component.component.css']
})
export class EstadosWebCreateComponentComponent implements OnInit {


  @Input()
  idsitio:number;
  descripcion:string;
  estado:string;
  private estadoWeb: EstadoWeb;
  loader: any;

  constructor(private estadosWebService: EstadosWebService ,private websiteService: WebsiteService ,  private route: ActivatedRoute) {}

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }
  onLoad(params) {
    this.idsitio = parseInt(params['site']);
  }

  decriptionFormControl = new FormControl('', [
    Validators.required,
      Validators.minLength(10)
  ]);

  estadoFormControl=new FormControl('',[Validators.required]);

  crearsitioAsociado()
  {
    this.websiteService.getSite(this.idsitio).subscribe(value =>
    {
        this.estadoWeb= new EstadoWeb(this.estado,0,this.descripcion,new Date().toISOString(),value);
        console.log(this.estadoWeb);
        this.estadosWebService.createEstadoWeb(this.estadoWeb).subscribe(value1 => {
          console.log(value1);
        })

    }


    )

    //this.estadosWebService.createEstadoWeb()
  }

}
