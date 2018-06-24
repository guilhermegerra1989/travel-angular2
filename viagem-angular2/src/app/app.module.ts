import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from '././components/app/app.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { MessagesComponent }    from './components/messages/messages.component';

import { AppRoutingModule }     from './app-routing.module';
import { TravelComponent } from './components/travel/travel.component';
import { TravelDetailComponent } from './components/travel-detail/travel-detail.component';
import { NgDatepickerModule } from 'ng2-datepicker';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import { UserComponent } from './components/user/user.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgDatepickerModule,
    Ng2DatetimePickerModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    TravelComponent,
    MessagesComponent,
    TravelDetailComponent,
    UserComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { 




}
