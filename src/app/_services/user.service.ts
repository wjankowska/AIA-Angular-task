import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../_interfaces/IUser';
import { IPost } from '../_interfaces/IPost';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id: string): Observable<IUser[]> {
    return this.http.get<IUser[]>(`https://jsonplaceholder.typicode.com/users?id=${id}`);
  }

  getPostsByUser(id: string): Observable<IPost[]> {
    return this.http.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?userid=${id}`);
  }
}
