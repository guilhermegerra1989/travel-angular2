import { Injectable } from '@angular/core';

import { User } from '../entities/user';
import { USERS } from '../mocks/mock-users';
import { MessageService } from '../services/message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private messageService: MessageService) { }

  getUsers(): Observable<User[]> {
    this.messageService.add('TravelService: fetched users');
    return of(USERS);
  }
}
