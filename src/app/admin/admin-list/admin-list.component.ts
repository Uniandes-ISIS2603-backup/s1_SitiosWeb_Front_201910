import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  admins: Admin[];
  selectedIndex: number;
  expande: boolean;
  constructor(private adminService: AdminService, public router: Router) { }


  /**
    * Asks the service to update the list of admins
    */
  getAdmins(): void {
    this.adminService.getAdmins()
      .subscribe(admins => {
        this.admins = admins;
      });
  }

  expandir(id): void{
    console.log("asdfsadf"+id);
    this.selectedIndex = id;
    this.expande = true;
  }

  noExpandir(): void{
    this.expande = false;
  }

  getAdminDetail(id:number): void {
    this.expande = true;
    this.selectedIndex = id;
    this.router.navigate(['/admins/'+id]);
  }

  ngOnInit() {
    this.expande = false;
    this.getAdmins();
  }
}
