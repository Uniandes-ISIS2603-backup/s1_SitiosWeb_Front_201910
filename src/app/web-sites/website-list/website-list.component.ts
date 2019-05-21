import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Website } from '../website';
import { WebsiteService } from '../website.service';
import { EstadosWebService} from "../../estados-web/estados-web.service";
import {MatBottomSheet} from "@angular/material";
import {WebsiteCreateComponent} from "../website-create/website-create.component";
import {Router} from "@angular/router";


@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {


  constructor(private websiteService: WebsiteService,public router: Router,private webstateService: EstadosWebService,private bottomSheet: MatBottomSheet ) { }



  websites : Website[] ;

  getWebSites(): void {
    var thumbnaiAPI= "https://api.thumbnail.ws/api/ab18504260d333b42490e206a93767ae1b0adff77399/thumbnail/get?width=480&url=";
    this.websiteService.getSites().subscribe(sites =>{
        this.websites = sites;
        this.websites.forEach(value => value.imagen=thumbnaiAPI+value.url);
        this.websites.forEach(value => {
                    var estado= this.webstateService.getEstadoActualStatic(value.id).subscribe(value1 => value.state=value1);

            }
        );
    });



  }


  ngOnInit() {
    this.getWebSites();
  }


    openCreateSheet() {
        this.bottomSheet.open(WebsiteCreateComponent, {
            panelClass:'bottom-half',
        });
    }

    showstatehistory(site:number ) {

        this.router.navigate(['/websites/states/'+site]);
    }
}
