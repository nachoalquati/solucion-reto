import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepairsPhoneService {
  private apiUrl = 'http://localhost:3000/admin/repairs-by-phone'; // URL de la API de inicio de sesión

  constructor(private http: HttpClient) { }

  getRepairs(id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = {
      phoneId: id,
    };
    return this.http.post(this.apiUrl, body, { withCredentials: true, ...httpOptions });
  }
}