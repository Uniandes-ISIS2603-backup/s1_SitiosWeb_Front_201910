import { Component, OnInit } from '@angular/core';
import { Website } from '../website';
import { WebsiteService } from '../website.service';

import {st} from "@angular/core/src/render3";


@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  constructor(private websiteService: WebsiteService) { }

  websites : Website[] ;

  getEditorials(): void {
    this.websiteService.getSites().subscribe(sites =>
        this.websites = sites);
  }

  ngOnInit() {
    this.getEditorials();
  }

}
