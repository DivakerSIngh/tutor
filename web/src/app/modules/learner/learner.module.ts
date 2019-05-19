import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnerRoutingModule } from './learner-routing.module';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,MatGridListModule,MatProgressSpinnerModule,MatPaginatorModule, MatSlideToggleModule, MatAutocompleteModule, MatRadioModule, MatDatepickerModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExpertListComponent } from './expert-list/expert-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { LearnerTopicComponent } from './learner-topic/learner-topic.component';
import { EditProfileComponent } from './setting/edit-profile/edit-profile.component';
import { LearnerNotificationComponent } from './setting/learner-notification/learner-notification.component';

import { LearnerTopicTabsComponent } from './profile/components/learner-topic-tabs/learner-topic-tabs.component';
import { ScheduledTopicComponent } from './profile/components/scheduled-topic/scheduled-topic.component';
import { PastTopicComponent } from './profile/components/past-topic/past-topic.component';
import { FavouriteExpertComponent } from './profile/components/favourite-expert/favourite-expert.component';
import { TopicStatusCalenderComponent } from './profile/components/topic-status-calender/topic-status-calender.component';
import { LearnerProfileHomeComponent } from './learner-profile-home/learner-profile-home.component';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UnscheduledTopicComponent } from './profile/components/unscheduled-topic/unscheduled-topic.component';
import { LearnerPasswordComponent } from './setting/learner-password/learner-password.component';
import { BecomeExpertComponent } from './become-expert/become-expert.component';


@NgModule({
  declarations: [ExpertListComponent,ScheduledTopicComponent,
    PastTopicComponent,FavouriteExpertComponent,TopicStatusCalenderComponent,
     ProfileComponent,LearnerTopicComponent, EditProfileComponent, LearnerNotificationComponent, 
     LearnerPasswordComponent, LearnerTopicTabsComponent, LearnerProfileHomeComponent, UnscheduledTopicComponent, LearnerPasswordComponent, BecomeExpertComponent],
  imports: [
    CommonModule,
    LearnerRoutingModule,
    MatButtonModule,
    FormsModule,
    SharedModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
  MatInputModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatRadioModule,
  

  MatRippleModule,
  
  MatTooltipModule,
  MatGridListModule,MatProgressSpinnerModule,MatPaginatorModule, MatSlideToggleModule, MatAutocompleteModule
  ]
})
export class LearnerModule { }
