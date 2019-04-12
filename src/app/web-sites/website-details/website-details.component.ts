import {Component, Inject, Input, OnInit} from '@angular/core';
import {Website} from "../website";
import {WebSiteDetail} from "../WebSiteDetail";
import {MatTreeNestedDataSource} from "@angular/material";
import {NestedTreeControl} from "@angular/cdk/tree";
import {Router} from "@angular/router";


interface WebSiteDetailNode {
  name: string;
  children?: WebSiteDetailNode[];
}


@Component({
  selector: 'app-website-details',
  templateUrl: './website-details.component.html',
  styleUrls: ['./website-details.component.css']
})
export class WebsiteDetailsComponent implements OnInit {


  site :Website;

  constructor(public router: Router) {
  }

  ngOnInit() {
  }




  setSite( site:Website ):void
  {
    this.site=site;
  }

  panelOpenState = false;

  getSitesRelated()
  {
    this.router.navigate(['/websites/related',{ outlets: { related: [this.site.id] } }]);
  }
}
