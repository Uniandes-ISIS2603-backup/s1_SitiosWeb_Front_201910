import {Component, Input, OnInit} from '@angular/core';
import {Website} from "../website";
import {ActivatedRoute, Params} from "@angular/router";
import {WebsiteService} from "../website.service";

@Component({
  selector: 'app-website-related-list',
  templateUrl: './website-related-list.component.html',
  styleUrls: ['./website-related-list.component.css']
})
export class WebsiteRelatedListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'url'];

  @Input()
  siteID: number;

  dataSource: Website[];

  loader: any;

  constructor(private route: ActivatedRoute,private websiteService: WebsiteService) { }

  onLoad(params) {
    this.siteID = parseInt(params['id']);
    console.log(" en detail " + this.siteID);
    this.getWebSites();
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  getWebSites(): void {
    this.websiteService.getSitesRelated(this.siteID).subscribe(sites => {
      this.dataSource = sites;
    });
  }


}
