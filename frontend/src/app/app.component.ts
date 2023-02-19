import { Component,inject } from '@angular/core';
import { LogoutService } from './logout.service';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reparaciones TEL';

  logouts:any
 

  http = inject(HttpClient);

  constructor(private router: Router, private logoutserv:LogoutService) { }

  logout(){
      this.logoutserv.logOut().subscribe(data => {
        if(data.status=201){
          this.router.navigate(['/login']);
        }
        
      });
  
  }
}
