import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  private apiUrl = 'http://localhost:3000/admin/phones-by-client'; // URL de la API de inicio de sesión

  constructor(private http: HttpClient) { }

  getPhones(id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = {
      clientId: id,
    };
    return this.http.post(this.apiUrl, body, { withCredentials: true, ...httpOptions });
  }
}