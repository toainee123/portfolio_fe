import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceInfo {
  apiUrl = 'http://localhost:3000/api';
  constructor(
    private http: HttpClient
  ) { }

  getServiceInfo(): Observable<any> {
    return this.http.get(this.apiUrl + '/informations');
  }
  createServiceInfo(data: any): Observable<any> {
    return this.http.post(this.apiUrl + '/informations', data);
  }
  updateServiceInfo(id: string, data: any): Observable<any> {
    return this.http.put(this.apiUrl + '/informations/' + id, data);
  }
  deleteServiceInfo(id: string): Observable<any> {
    return this.http.delete(this.apiUrl + '/informations/' + id);
  }
}
