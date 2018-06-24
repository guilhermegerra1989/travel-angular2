import { Component, OnInit, Input } from '@angular/core';

import { Travel } from '../../entities/travel';
import { TravelService } from '../../services/travel.service';
import { DatepickerOptions } from 'ng2-datepicker';
import * as enLocale from 'date-fns/locale/en';
import { Aircraft } from '../../entities/aircraft';
import { User } from '../../entities/user';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  travels: Travel[];
  @Input() aircrafts: Aircraft[];
  @Input() users: User[];
  @Input() travel: Travel;

  constructor(private travelService: TravelService) { }

  
  ngOnInit() {
    this.getTravels();
    this.getAircrafts();
    this.getUsers();
    
    this.travel = new Travel();
  }

  getTravels(): void {
    this.travelService.getTravels()
    .subscribe(travels => this.travels = travels);
  }

  getAircrafts(): void {
    this.travelService.getAircrafts()
      .subscribe(aircrafts => this.aircrafts = aircrafts);
  }

  getUsers(): void {
    this.travelService.getUsers()
      .subscribe(users => this.users = users);
  }

  goAdd(obj): void {
    var travel = new Travel;
    travel.id = this.travels.length +1;
    travel.userName = obj.userName;
    travel.date = obj.date;
    travel.origin = obj.origin;
    travel.destination = obj.destination;
    travel.aircraft = obj.aircraft;
    this.travels.push(travel);
  }

  goRemove(id): void {
    this.travels.splice(this.travels.indexOf(this.travels.find(x => x.id == id)),1);
  }

}
