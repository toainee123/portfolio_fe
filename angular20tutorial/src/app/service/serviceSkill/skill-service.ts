import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(
    private http: HttpClient
  ) { }
  apiUrl = 'http://localhost:3000/api';

  getAllSkills = (): Observable<any> => {
    return this.http.get(this.apiUrl + '/skills');
  }
  
}
