import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  login(user: any) : Observable<any> {
    return this.http.post(this.apiUrl + '/login', user)
  }
  register(user: any) : Observable<any> {
    return this.http.post(this.apiUrl + '/register', user)
  }
}
