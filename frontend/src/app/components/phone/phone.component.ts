import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhoneService } from 'src/app/phones.service';
import { Phone } from 'src/app/models/phone.model';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent {

  constructor(private route: ActivatedRoute, private phoneService: PhoneService) { }

  @Input() phone!:Phone 

}
