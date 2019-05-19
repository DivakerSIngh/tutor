import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertRoutingModule } from './expert-routing.module';
import { BasicProfileComponent } from './basic-profile/basic-profile.component';
import { BecomeExpertComponent } from './become-expert/become-expert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,MatGridListModule,MatProgressSpinnerModule,MatPaginatorModule, MatSlideToggleModule, MatAutocompleteModule
} from '@angular/material';
import { SkillDetailsComponent } from './skill-details/skill-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExpertNotificationComponent } from './expert-notification/expert-notification.component';
import { AvailabilityCalenderComponent } from './availability-calender/availability-calender.component';


@NgModule({
  declarations: [BasicProfileComponent, BecomeExpertComponent, DashboardComponent, SkillDetailsComponent, ExpertNotificationComponent, AvailabilityCalenderComponent],
  imports: [
    CommonModule,
    ExpertRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  MatInputModule,
  MatAutocompleteModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,MatGridListModule,MatProgressSpinnerModule,MatPaginatorModule, MatSlideToggleModule
  ]
})
export class ExpertModule { }
