import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:3000/users/logout'; // URL de la API


  logOut(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true // Agrega la opción withCredentials
    };
    return this.http.get(this.apiUrl, httpOptions);
  }

}