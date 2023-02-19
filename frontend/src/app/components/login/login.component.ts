import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Client } from '../../models/client.model'
import { FormControl } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/auth.service';
import { ClientListComponent } from './../client-list/client-list.component'
import { ClientComponent } from './../client/client.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent {

  authenticated = false;
  atempt = 0

  email: string = '';
  password: string ='';
  alert: string = '';

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}


  onSubmit() {
    
    this.authService.login(this.email, this.password)
      .subscribe(
        response =>{

          
          if(response.status=200){
            this.authenticated = true;
            this.router.navigate(['/clients']);
          }
        },
        error => {    
          this.alert = error.error.error
          this.atempt =+ 1
        }
      );
  }
}

