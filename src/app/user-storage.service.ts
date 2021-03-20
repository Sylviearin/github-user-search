import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface User {
  id: number;
  name?: string;
  avatar_url?: string;
  followers?: string;
  following?: string;
  company?: string;
}

@Injectable({providedIn: 'root'})
export class UserStorageService {
  error = '';
  users: Array<User> = [];
  constructor(private http: HttpClient) {
  }
  getById(id: string): Observable<object> {
    return this.http.get('https://api.github.com/users/' + id);
  }
  deleteUser(id: number): void {
    this.users = this.users.filter(elem => elem.id !== id);
  }
}
