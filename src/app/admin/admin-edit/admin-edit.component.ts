import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';
import { AdminDetail } from '../admin-detail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  /**
   * The component's constructor
   * @param adminService The admin's service
   * @param toastrService The toastr to show messages to the user 
   */
  constructor(
    private adminService: AdminService,
    private toastrService: ToastrService,
    private route: ActivatedRoute,
  ) { }

  /**
  * The output which tells the parent component
  * that the user no longer wants to create an editorial
  */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user updated a new admin
  */
  @Output() update = new EventEmitter();

  /**
  * The admin to edit
  */
  admin: AdminDetail;

  /**
   * Retrieves the information of the admin
   */
  getAdmin(): void {
    this.adminService.getAdminDetail(this.admin.id)
      .subscribe(admin => {
        this.admin = admin;
      });
  }

  /**
  * Updates the admin's information
  */
  editAdmin(): void {
    this.adminService.updateAdmin(this.admin)
      .subscribe(() => {
        this.update.emit();
        this.toastrService.success("The admin's information was updated", "Admin edition");
      });
  }

  /**
    * Informs the parent component that the user no longer wants to update the admin
    */
  cancelEdition(): void {
    this.cancel.emit();
  }

  /**
  * The function which initializes the component
  */
  ngOnInit() {
    this.admin = new AdminDetail();
    this.admin.id =+ this.route.snapshot.paramMap.get('id'); 
    this.getAdmin();
  }

}
