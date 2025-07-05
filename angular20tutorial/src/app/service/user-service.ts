import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient) {

  }

  getUsers(){
    return this.http.get('http://localhost:3000/users')
  }
  createUser(user: any){
    return this.http.post('http://localhost:3000/users', user)
  }
  deleteUser(id: string){
    return this.http.delete('http://localhost:3000/users/' + id)
  }
  updateUser(id: string, user: any){
    return this.http.put('http://localhost:3000/users/' + id, user)
  }
}
