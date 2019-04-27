import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute } from '@angular/router';
import { AdminDetail } from '../admin-detail';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent implements OnInit {

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute
  ) { }

  /**
  * The admin whose details we want to show
  */
  adminDetail: AdminDetail;


  expande: boolean = false;
  /**
  * The admin's id retrieved from the address
  */
  adminId: number;

  getAdminDetail(): void {
    this.adminService.getAdminDetail(this.adminId)
      .subscribe(adminDetail => {
        this.adminDetail = adminDetail
      });
  }

  expandir(): void
  {
    this.expande = true;
  }

  noExpandir(): void{
    this.expande = false;

  }


  ngOnInit() {
    this.adminId =+ this.route.snapshot.paramMap.get('id');
    this.adminDetail = new AdminDetail();
    this.getAdminDetail();
    this.expande = false;
  }

}
