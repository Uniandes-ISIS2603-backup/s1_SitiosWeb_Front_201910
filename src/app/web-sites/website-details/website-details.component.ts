import {Component, Inject, Input, OnInit} from '@angular/core';
import {Website} from "../website";
import {ActivatedRoute, Params, Router} from "@angular/router";
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

  loader: any;

  constructor(public router: Router,private sitesService: WebsiteService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  onLoad(params) {

    this.site_id = parseInt(params['site']);
    console.log(" en detail " + this.site_id);
    this.getSiteDetail();
  }

  getSiteDetail(): void {
    this.sitesService.getSite(this.site_id)
        .subscribe(detail => {
          this.site = detail;
          var thumbnaiAPI= "https://api.thumbnail.ws/api/ab18504260d333b42490e206a93767ae1b0adff77399/thumbnail/get?width=480&url=";

          this.site.imagen=thumbnaiAPI+this.site.url;
        });
  }






  panelOpenState = false;

  getSitesRelated()
  {
    this.router.navigate(['/websites/related',{ outlets: { related: [this.site.id] } }]);
  }
}
