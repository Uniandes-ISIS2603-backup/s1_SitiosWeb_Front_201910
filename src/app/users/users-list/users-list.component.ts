import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[];

  constructor(private usersService: UsersService) { }


  /**
    * Asks the service to update the list of users
    */
  getUsers(): void {
    this.usersService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }

  ngOnInit() {
    this.getUsers();
  }

}
