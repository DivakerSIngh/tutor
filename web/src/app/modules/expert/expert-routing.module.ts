import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicProfileComponent } from './basic-profile/basic-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SkillDetailsComponent } from './skill-details/skill-details.component';
import { ExpertNotificationComponent } from './expert-notification/expert-notification.component';
import { AvailabilityCalenderComponent } from './availability-calender/availability-calender.component';

const routes: Routes = [
  { path:'', redirectTo:'dashboard',  component:DashboardComponent },
  { path:'dashboard',  component:DashboardComponent },
  { path:'profile',  component:BasicProfileComponent },
  { path:'skill',  component:SkillDetailsComponent },
  { path:'notification',  component:ExpertNotificationComponent },
  { path:'setting',  component:AvailabilityCalenderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpertRoutingModule { }
