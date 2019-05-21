import {Component, Input, OnInit} from '@angular/core';
import { EstadoWeb } from '../estadoWeb';
import { EstadosWebService } from '../estados-web.service';

import {st} from "@angular/core/src/render3";
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Website} from "../../web-sites/website";


@Component({
  selector: 'app-estados-web-list',
  templateUrl: './estados-web-list.component.html',
  styleUrls: ['./estados-web-list.component.css']
})
export class EstadosWebListComponent  implements  OnInit{

  @Input()
  site_id:number;

  loader: any;

  displayedColumns: string[] = ['id', 'estado', 'descripcion', 'fecha'];

  constructor(private estadosWebService: EstadosWebService,public router: Router,private route: ActivatedRoute) { }

  estadosWeb : EstadoWeb[] ;

  subscription:Subscription;
  mustkill:boolean;

  getEstadosWeb(sitio:number): void {

    this.subscription = this.estadosWebService.getEstadosSitio(sitio).subscribe(estados =>
        this.estadosWeb = estados);
  }

  kill():void
  {
    console.log(`killing subscription ${this.subscription}`);
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    console.log("entrando a panel lista de estados");
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
    this.mustkill=false;

  }
  onLoad(params) {
    console.log("recibiendo parametros");
    this.site_id = parseInt(params['site']);
    console.log("recibiendo lista de estados");
    this.getEstadosWeb(this.site_id);
  }
}