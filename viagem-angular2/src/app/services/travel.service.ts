import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Travel } from '../entities/travel';
import { TRAVELS } from '../mocks/mock-travels';
import { MessageService } from '../services/message.service';
import { Aircraft } from '../entities/aircraft';
import { AIRCRAFTS } from './../mocks/mock-aircrafts';
import { User } from '../entities/user';
import { USERS } from './../mocks/mock-users';

@Injectable({ providedIn: 'root' })
export class TravelService {

  constructor(private messageService: MessageService) { }

  getTravels(): Observable<Travel[]> {
    this.messageService.add('TravelService: fetched travels');
    return of(TRAVELS);
  }

  getTravel(id: number): Observable<Travel> {
    this.messageService.add(`TravelService: fetched travel id=${id}`);
    return of(TRAVELS.find(Travel => Travel.id === id));
  }

  getAircrafts(): Observable<Aircraft[]> {
    this.messageService.add('TravelService: fetched aircrafts');
    return of(AIRCRAFTS);
  }

  getUsers(): Observable<User[]> {
    this.messageService.add('TravelService: fetched users');
    return of(USERS);
  }
}
