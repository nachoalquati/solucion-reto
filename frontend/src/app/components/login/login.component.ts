import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Client } from '../../models/client.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  http = inject(HttpClient);
  login(){
    this.http.post<any>('/users/login', {
      
    })
    .subscribe((data) =>{
      console.log(data);
    })
  }

}
