import {Component, Inject, Input, OnInit} from '@angular/core';
import {Website} from "../website";
import {Router} from "@angular/router";
import {TechnologyDetail} from "../../technologies/technologies-detail";
import {TechnologiesService} from "../../technologies/technologies.service";
import {WebsiteService} from "../website.service";


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

  @Input()
  site_id:number;

  site :Website;

  constructor(public router: Router,private sitesService: WebsiteService,) {
  }

  ngOnInit() {
    this.techDetail = new TechnologyDetail();
    this.getTechnologyDetail();
  }

  getSiteDetail(): void {
    this.sitesService.getSites(this.site_id)
        .subscribe(detail => {
          this.site = detail
        });
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
