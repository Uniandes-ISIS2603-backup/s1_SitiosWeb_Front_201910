import {Component, Inject, Input, OnInit} from '@angular/core';
import {Website} from "../website";


@Component({
  selector: 'app-website-details',
  templateUrl: './website-details.component.html',
  styleUrls: ['./website-details.component.css']
})
export class WebsiteDetailsComponent implements OnInit {

  idsitio:Website;

  constructor() {}

  ngOnInit() {
  }


  setSite( site:Website ):void
  {
    this.idsitio=site;
  }

}
