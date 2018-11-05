import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  usersMock = [{ FirstName: 'Bobby', LastName: 'Brown' },
  { FirstName: 'Mike', LastName: 'Jean' },
  { FirstName: 'Steve', LastName: 'Krul' },
  ];
  constructor() { }

  getUsers(): {}[] {
    return this.usersMock;
  }
}
