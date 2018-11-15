import { Component, OnInit } from '@angular/core';
import { UsersService, IUsers } from '../users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {

users: IUsers[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers()
    .subscribe(
      (users) => this.users = users,
      );
  }
}
