import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatePhoneService {
  private apiUrl = 'http://localhost:3000/admin/new-phone'; // URL de la API de inicio de sesión

  constructor(private http: HttpClient) { }

  login(model: string, observation: string, clientId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = {
      model: model,
      observation: observation,
      clientId: clientId
    };
    return this.http.post(this.apiUrl, body, { withCredentials: true, ...httpOptions });
  }
}