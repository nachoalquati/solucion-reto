import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateRepairService {
  private apiUrl = 'http://localhost:3000/admin/assing-repair'; // URL de la API de inicio de sesión

  constructor(private http: HttpClient) { }

  createRepair(amount: string, observation: string, phoneId: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = {
      amount: amount,
      observation: observation,
      phoneId: phoneId
    };
    return this.http.post(this.apiUrl, body, { withCredentials: true, ...httpOptions });
  }
}