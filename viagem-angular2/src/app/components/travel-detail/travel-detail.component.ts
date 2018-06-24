import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Travel }         from '../../entities/travel';
import { TravelService }  from '../../services/travel.service';

import { DatepickerOptions } from 'ng2-datepicker';
import * as enLocale from 'date-fns/locale/en';
import { Aircraft } from '../../entities/aircraft';
import { User } from '../../entities/user';



@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.css']
})
export class TravelDetailComponent implements OnInit {
  @Input() travel: Travel;
  @Input() aircrafts: Aircraft[];
  @Input() users: User[];
  
  constructor(
    private route: ActivatedRoute,
    private travelService: TravelService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTravel();
    this.getAircrafts();
    this.getUsers();
  }

  getTravel(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.travelService.getTravel(id)
      .subscribe(travel => this.travel = travel);
  }

  getAircrafts(): void {
    this.travelService.getAircrafts()
      .subscribe(aircrafts => this.aircrafts = aircrafts);
  }

  getUsers(): void {
    this.travelService.getUsers()
      .subscribe(users => this.users = users);
  }

  goBack(): void {
    this.location.back();
  }

  options: DatepickerOptions = {
    displayFormat: 'DD-MM-YYYY HH:mm:ss',
    barTitleFormat: 'DD-MM-YYYY',
    dayNamesFormat: 'dd',
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    locale: enLocale, 
    barTitleIfEmpty: 'Click to select a date',
    placeholder: 'Click to select a date', // HTML input placeholder attribute (default: '')
    addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
    addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
    fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
    useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown 
  };
  

}

