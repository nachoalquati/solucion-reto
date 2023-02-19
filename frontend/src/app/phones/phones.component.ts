import { Component, OnInit, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhoneService } from '../phones.service';
import { Phone } from '../models/phone.model';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent {

  constructor(private route:ActivatedRoute ,private phoneService: PhoneService) { }
 

http = inject(HttpClient);

phones:any

id:string = '';

  ngOnInit(){

    this.id = this.route.snapshot.paramMap.get('id') || '0';
    this.phoneService.getPhones(this.id).subscribe(data => {
      this.phones = data.data;
      console.log(this.phones);
    });
  }
}

