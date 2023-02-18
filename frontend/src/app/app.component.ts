import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reparaciones TEL';

  onSubmit(){
    this.title = "Iniciando sesion"
  }
}
