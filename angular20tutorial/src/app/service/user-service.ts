import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient) {

  }

  getUsers(): Observable<any>{
    return this.http.get('http://localhost:3000/api/users') 
  }
  getUserById(id: string, token: string): Observable<any>{
    return this.http.get('http://localhost:3000/api/users/' + id, {
      headers: {Authorization: `Bearer ${token}`}
    })
  }
  createUser(user: any, token: string): Observable<any>{
    return this.http.post('http://localhost:3000/api/users', user, 
      {headers: {Authorization: `Bearer ${token}`}})
  }
  deleteUser(id: string, token: string): Observable<any>{
    return this.http.delete('http://localhost:3000/api/users/' + id, {
      headers: {Authorization: `Bearer ${token}`}
    })
  }
  updateUser(id: string, user: any, token: string): Observable<any>{
    return this.http.put('http://localhost:3000/api/users/' + id, user, {
      headers: {Authorization: `Bearer ${token}`}
    })
  }
}
