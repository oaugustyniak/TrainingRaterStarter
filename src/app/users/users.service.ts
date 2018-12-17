import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface IUsers {
  id: any;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
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

getUserById(id: number): Observable<IUsers> {
  return this.http.get<IUsers>(`http://localhost:3000/users/${id}`);
}

save(user: IUsers): Observable<IUsers | number[]> {
    if (user.id) {
        return this.http.put<number[]>(`http://localhost:3000/users`, user);
    } else {
        return this.http.post<IUsers>(`http://localhost:3000/users`, user);
    }
}

}
