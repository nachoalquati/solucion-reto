import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepairsPhoneService } from 'src/app/repairs-phone.service';
import { Repair } from 'src/app/models/repair.model';


@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent {

  constructor(private route: ActivatedRoute, private repairsService: RepairsPhoneService) { }

  @Input() repair!: Repair

}
