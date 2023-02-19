import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateClientService {
  private apiUrl = 'http://localhost:3000/clients/create'; // URL de la API de inicio de sesión

  constructor(private http: HttpClient) { }

  createClient(email: string, name: string, phone: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = {
      email: email,
      name: name,
      phone: phone
    };
    return this.http.post(this.apiUrl, body, { withCredentials: true, ...httpOptions });
  }
}