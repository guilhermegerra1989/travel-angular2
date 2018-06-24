import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent }   from './components/user/user.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { TravelComponent }      from './components/travel/travel.component';
import { TravelDetailComponent }  from './components/travel-detail/travel-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'detail/:id', component: TravelDetailComponent },
  { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
