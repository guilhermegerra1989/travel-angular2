import { Component, OnInit } from '@angular/core';

import { Travel } from '../../entities/travel';
import { TravelService } from '../../services/travel.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  travels: Travel[] = [];

  constructor(private travelService: TravelService) { }

  ngOnInit() {
    this.getTravels();
  }

  getTravels(): void {
    this.travelService.getTravels()
      .subscribe(travels => this.travels = travels.slice(0, 20));
  }
}
