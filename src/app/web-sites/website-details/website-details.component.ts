import {Component, Inject, Input, OnInit} from '@angular/core';
import {Website} from "../website";
import {WebSiteDetail} from "../WebSiteDetail";
import {MatTreeNestedDataSource} from "@angular/material";
import {NestedTreeControl} from "@angular/cdk/tree";


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

  treeControl = new NestedTreeControl<WebSiteDetailNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<WebSiteDetailNode>();


  site :Website;

  constructor() {
    this.dataSource.data = this.TREE_DATA;
  }

  ngOnInit() {
  }



   TREE_DATA: WebSiteDetailNode[] = [
    {
      name: 'SitiosRelacionados',
      children: [
        {name: 'site 1'},
        {name: 'site 2'},
        {name: 'site 3'}
      ]
    },
     {
       name: 'Tecnologias de desarollo',
       children: [
         {name: 'tec 1'},
         {name: 'tec 2'},
         {name: 'tec 3'}
       ]
     },
     {
       name: 'Plataformas de despliegue',
       children: [
         {name: 'plat 1'},
         {name: 'plat 2'},
         {name: 'plat 3'}
       ]
     }
   ];


  setSite( site:Website ):void
  {
    this.site=site;
  }

  hasChild = (_: number, node: WebSiteDetailNode) => !!node.children && node.children.length > 0;

}
