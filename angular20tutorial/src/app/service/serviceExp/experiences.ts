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
  createExperience = (data: any, token: string): Observable<any> => {
    return this.http.post(this.apiUrl + '/experience', data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  updateExperience = (id: string, data: any, token: string): Observable<any> => {
    return this.http.put(this.apiUrl + '/experience/' + id, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  deleteExperience = (id: string, token: string): Observable<any> => {
    return this.http.delete(this.apiUrl + '/experience/' + id, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  getExperienceById = (id: string, token: string): Observable<any> => {
    return this.http.get(this.apiUrl + '/experience/' + id, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
