import {Component, Inject, OnInit} from '@angular/core';


@Component({
  selector: 'app-website-details',
  templateUrl: './website-details.component.html',
  styleUrls: ['./website-details.component.css']
})
export class WebsiteDetailsComponent implements OnInit {

  idsitio:number;

  constructor() {}

  ngOnInit() {
  }


  getDetails( site:number ):void
  {
    this.idsitio=site;
  }

}
