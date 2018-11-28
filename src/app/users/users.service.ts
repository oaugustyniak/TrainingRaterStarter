import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface IUsers {
  userName: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
}


@Injectable()
export class UsersService {

  constructor(
    private http: HttpClient,
  ) { }

getUsers(): Observable<IUsers[]> {
  return this.http.get<IUsers[]>('http://localhost:4200/users');
  }

}
