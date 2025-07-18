import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Experiences {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl = 'http://localhost:3000/api';
  getAllExperiences = (): Observable<any> => {
    return this.http.get(this.apiUrl + '/experiences');
  }
  createExperience = (data: any): Observable<any> => {
    return this.http.post(this.apiUrl + '/experiences', data);
  }
  updateExperience = (id: string, data: any): Observable<any> => {
    return this.http.put(this.apiUrl + '/experiences/' + id, data);
  }
  deleteExperience = (id: string): Observable<any> => {
    return this.http.delete(this.apiUrl + '/experiences/' + id);
  }
}
