import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../users.service';
import { ToastrService } from 'ngx-toastr';
import { UserDetail } from '../user-detail';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

  /**
    * The component's constructor
    * @param userService The user's service
    * @param toastrService The toastr to show messages to the user 
    */
  constructor(
    private userService: UsersService,
    private toastrService: ToastrService,
    public router: Router,
    private route: ActivatedRoute,
  ) { }

  /**
  * The output which tells the parent component
  * that the user no longer wants to create an user
  */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user updated a new user
  */
  @Output() update = new EventEmitter();

  /**
  * The user to edit
  */
  user: UserDetail;

  /**
  * Retrieves the information of the user
  */
  getUser(): void {
    this.userService.getUserDetail(this.user.id)
      .subscribe(user => {
        this.user = user;
      });
  }

  /**
  * Updates the user's information
  */
  editUser(): void {
    this.userService.updateUser(this.user)
      .subscribe(() => {
        this.update.emit();
        this.toastrService.success("The user's information was updated", "User edition");
      });
  }

  /**
  * Informs the parent component that the user no longer wants to update the user
  */
  cancelEdition(): void {
    this.cancel.emit();
  }

  /**
  * The function which initializes the component
  */
  ngOnInit() {
    this.user = new UserDetail();
    this.user.id =+ this.route.snapshot.paramMap.get('id');
    this.getUser();
  }

}
