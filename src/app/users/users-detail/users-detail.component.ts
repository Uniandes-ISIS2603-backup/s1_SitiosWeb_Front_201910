import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { UserDetail } from '../user-detail';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) { }

  /**
  * The user whose details we want to show
  */
  userDetail: UserDetail;



  /**
  * The user's id retrieved from the address
  */
  usuario_id: number;



  getEditorialDetail(): void {
    this.userService.getUserDetail(this.usuario_id)
      .subscribe(userDetail => {
        this.userDetail = userDetail
      });
  }

  /**
  * The method which initializes the component
  * We need to initialize the user so it is never considered as undefined
  */
  ngOnInit() {
    this.usuario_id = +this.route.snapshot.paramMap.get('id');
    this.userDetail = new UserDetail();
    this.getEditorialDetail();
  }
}
