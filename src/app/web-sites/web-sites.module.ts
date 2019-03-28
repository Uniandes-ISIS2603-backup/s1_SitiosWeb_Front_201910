import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteListComponent } from './website-list/website-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    WebsiteListComponent
  ],
  declarations: [WebsiteListComponent]
})
export class WebSitesModule { }
